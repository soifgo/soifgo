// ---- Config ----
const stripEl = document.getElementById('strip');
const N_DEFAULT = 40; // set to 160 or 999 if needed

// ---- State ----
let N = N_DEFAULT;
let pixels = [];
let Ado = 1;     // used by star_* routines
let Chc = 0;     // toggle helper for star_* routines
let nnb = 0;     // toggle helper for percolate variants
let T = 1;       // helper used by playful/grow effects

// ---- Strip helpers ----
function initStrip(n = N_DEFAULT) {
  stripEl.innerHTML = '';
  pixels = [];
  for (let i=0;i<n;i++){
    const d = document.createElement('div');
    d.className = 'px';
    stripEl.appendChild(d);
    pixels.push(d);
  }
  N = n;
}

function rgb(r,g,b){ return `rgb(${r},${g},${b})`; }
function setPixel(i, r,g,b) {
  if (i<0 || i>=N) return;
  pixels[i].style.background = rgb(r,g,b);
  pixels[i].style.boxShadow = `0 0 8px ${rgb(r,g,b)}`;
}
function clearStrip(){ for (let i=0;i<N;i++) setPixel(i,0,0,0); }
function fillStripe(r,g,b){ for (let i=0;i<N;i++) setPixel(i,r,g,b); }

// Shift right/left across entire strip by one step
function shiftRight() {
  for (let i=N-1;i>0;i--) pixels[i].style.background = pixels[i-1].style.background;
  pixels[0].style.background = rgb(0,0,0);
  pixels.forEach(p => p.style.boxShadow = `0 0 8px ${p.style.background}`);
}
function shiftLeft() {
  for (let i=0;i<N-1;i++) pixels[i].style.background = pixels[i+1].style.background;
  pixels[N-1].style.background = rgb(0,0,0);
  pixels.forEach(p => p.style.boxShadow = `0 0 8px ${p.style.background}`);
}

function sleep(ms){ return new Promise(res=>setTimeout(res,ms)); }

// ---- Parsing ADRGBSEM ----


// helper: random number in range [min,max]
function randRange(min,max){
  return Math.floor(Math.random()*(max-min+1))+min;
}

function parseCmd(cmd) {
  cmd = cmd.trim().toUpperCase();
  const getNum = (ch, len=3) => {
    const p = cmd.indexOf(ch);
    if (p<0) return null;
    const v = cmd.substr(p+1, len);
    const num = parseInt(v,10);
    return Number.isFinite(num) ? num : null;
  };

  const D = getNum('D', 2);
  let R = getNum('R', 3) || 0;
  let G = getNum('G', 3) || 0;
  let B = getNum('B', 3) || 0;
  let S = getNum('S', 3) || 1;
  let E = getNum('E', 3) || 1;
  let M = getNum('M', 3);

  // --- random color mapping ---
  const mapColor = (val) => {
    if (val<=250) return val;
    if (val===251) return randRange(0,50);
    if (val===252) return randRange(50,100);
    if (val===253) return randRange(100,150);
    if (val===254) return randRange(150,200);
    if (val===255) return randRange(200,255);
    return val;
  };

  R = mapColor(R);
  G = mapColor(G);
  B = mapColor(B);

  // --- M logic ---
  if (M==null) M = N_DEFAULT;
  if (D>=1 && D<=38) {
    if (M===0) M = N_DEFAULT;
  }

  return {D,R,G,B,S,E,M};
}




// ---- Time wrappers ----
async function time1(S){ await sleep(S); }
async function time2(E){ await sleep(E); }

// ---- Core runner shortcuts used by effects ----
async function paintRangeColor(a,b,r,g,bv,delay=0){
  const s = Math.min(a,b), e = Math.max(a,b);
  for (let i=s;i<=e;i++) setPixel(i,r,g,bv);
  if (delay) await sleep(delay);
}
function clampIndex(i, M){ return Math.max(0, Math.min(i, M-1)); }

// ---- Effects (D00–D38) ----
// D00: solid color over entire strip or S..E block if provided
async function D00({R,G,B,S,E,M}){
  initStrip(M);
  clearStrip();
  const s = clampIndex(S, M), e = clampIndex(E, M);
  await paintRangeColor(s,e,R,G,B);
}

// D01: snak_run_slow
async function D01({R,G,B,S,E,M}){
  initStrip(M); clearStrip();
  for (let nd=0; nd<M; nd++){
    setPixel(nd,R,G,B);
    await time1(S);
  }
  for (let nd=0; nd<M; nd++){
    setPixel(nd,0,0,0);
    await time2(E);
  }
}




// D02: snak_return_slow
async function D02({R,G,B,S,E,M}){
  initStrip(N_DEFAULT); // always build full strip
  clearStrip();
  const active = (M>0)? M : N_DEFAULT; // number of active pixels
  for (let nd=active-1; nd>=0; nd--){
    setPixel(nd,R,G,B);
    await sleep(S);
  }
  for (let nd=active-1; nd>=0; nd--){
    setPixel(nd,0,0,0);
    await sleep(E);
  }
}




// D03: snak_run_fast (step=5, paint head+4)
async function D03({R,G,B,S,E,M}){
  initStrip(M); clearStrip();
  const step = 5;
  for (let nd=0; nd<M; nd+=step){
    for (let k=0;k<step;k++){
      const i = nd+k; if (i<M) setPixel(i,R,G,B);
    }
    await time1(S);
  }
  for (let nd=0; nd<M; nd+=step){
    for (let k=0;k<step;k++){
      const i = nd+k; if (i<M) setPixel(i,0,0,0);
    }
    await time2(E);
  }
}

// D04: snak_return_fast
async function D04({R,G,B,S,E,M}){
  initStrip(M); clearStrip();
  const step = 5;
  for (let nd=M-1; nd>=0; nd-=step){
    for (let k=0;k<step;k++){
      const i = nd-k; if (i>=0) setPixel(i,R,G,B);
    }
    await time1(S);
  }
  for (let nd=M-1; nd>=0; nd-=step){
    for (let k=0;k<step;k++){
      const i = nd-k; if (i>=0) setPixel(i,0,0,0);
    }
    await time2(E);
  }
}

// D05: snak_run_fast + snak_return_fast
async function D05(ctx){ await D03(ctx); await D04(ctx); }

// D06: snak_run_slow_random
async function D06({R,G,B,S,E,M}){
  initStrip(M); clearStrip();
  for (let nd=0; nd<M; nd++){
    if (nd%2===0) setPixel(nd, Math.floor(Math.random()* (R+1)), Math.floor(Math.random()* (G+1)), Math.floor(Math.random()* (B+1)));
    else setPixel(nd,R,G,B);
    await time1(S);
  }
  for (let n=1; n<M-1; n++){
    shiftRight();
    await time2(E);
  }
  clearStrip();
}

// D07: snak_return_slow_random
async function D07({R,G,B,S,E,M}){
  initStrip(M); clearStrip();
  for (let nd=M-1; nd>=0; nd--){
    if (nd%2===0) setPixel(nd, Math.floor(Math.random()* (R+1)), Math.floor(Math.random()* (G+1)), Math.floor(Math.random()* (B+1)));
    else setPixel(nd,R,G,B);
    await time1(S);
  }
  for (let n=1; n<M-1; n++){
    shiftLeft();
    await time2(E);
  }
  clearStrip();
}

// D08: run_slow_random + return_slow_random
async function D08(ctx){ await D06(ctx); await D07(ctx); }

// D09: snak_run_fast_random
async function D09({R,G,B,S,E,M}){
  initStrip(M); clearStrip();
  const step = 5;
  for (let nd=0; nd<M; nd+=step){
    for (let k=0;k<step;k++){
      const i = nd+k; if (i<M) {
        const rr = (nd%2===0)? Math.floor(Math.random()*(R+1)) : R;
        const gg = (nd%2===0)? Math.floor(Math.random()*(G+1)) : G;
        const bb = (nd%2===0)? Math.floor(Math.random()*(B+1)) : B;
        setPixel(i, rr, gg, bb);
      }
    }
    await time1(S);
  }
  for (let nd=0; nd<M; nd+=step){
    for (let k=0;k<step;k++){
      const i = nd+k; if (i<M) setPixel(i,0,0,0);
    }
    await time2(E);
  }
  clearStrip();
}

// D10: snak_return_fast_random
async function D10({R,G,B,S,E,M}){
  initStrip(M); clearStrip();
  const step = 5;
  for (let nd=M-1; nd>=4; nd-=step){
    for (let k=0;k<step;k++){
      const i = nd-k; if (i>=0) {
        const rr = (nd%2===0)? Math.floor(Math.random()*(R+1)) : R;
        const gg = (nd%2===0)? Math.floor(Math.random()*(G+1)) : G;
        const bb = (nd%2===0)? Math.floor(Math.random()*(B+1)) : B;
        setPixel(i, rr, gg, bb);
      }
    }
    await time1(S);
  }
  for (let nd=M-1; nd>=4; nd-=step){
    for (let k=0;k<step;k++){
      const i = nd-k; if (i>=0) setPixel(i,0,0,0);
    }
    await time2(E);
  }
  clearStrip();
}

// D11: run_fast_random + return_fast_random
async function D11(ctx){ await D09(ctx); await D10(ctx); }

// D12: snak_runreturn_slow_random
async function D12({R,G,B,S,E,M}){
  initStrip(M); clearStrip();
  for (let nd=M-1; nd>=0; nd--){
    const rr = (nd%2===0)? Math.floor(Math.random()*(R+1)) : R;
    const gg = (nd%2===0)? Math.floor(Math.random()*(G+1)) : G;
    const bb = (nd%2===0)? Math.floor(Math.random()*(B+1)) : B;
    setPixel(nd, rr, gg, bb);
    await time1(S);
  }
  for (let n=1; n<M-1; n++){ shiftRight(); await time2(E); }
  for (let nd=0; nd<M; nd++){
    const rr = (nd%2===0)? Math.floor(Math.random()*(R+1)) : R;
    const gg = (nd%2===0)? Math.floor(Math.random()*(G+1)) : G;
    const bb = (nd%2===0)? Math.floor(Math.random()*(B+1)) : B;
    setPixel(nd, rr, gg, bb);
    await time1(S);
  }
  for (let n=1; n<M-1; n++){ shiftLeft(); await time2(E); }
}

// D13: half_snak_out_mid_slow
async function D13({R,G,B,S,E,M}){
  initStrip(M); clearStrip();
  let I = M-1, Jj = Math.floor(M/2);
  for (let nd=0; nd<=Jj; nd++){
    setPixel(nd,R,G,B);
    await sleep(1);
    setPixel(I,R,G,B);
    await time1(S);
    I--;
  }
  await time2(E);
  clearStrip();
}

// D14: half_snak_mid_out_slow
async function D14({R,G,B,S,E,M}){
  initStrip(M); clearStrip();
  const Jj = Math.floor(M/2);
  let I = Jj;
  for (let nd=Jj; nd>=0; nd--){
    setPixel(nd,R,G,B);
    await sleep(1);
    setPixel(I,R,G,B);
    await time1(S);
    I++;
  }
  await time2(E);
  clearStrip();
}

// D15: combine 13 + 14
async function D15(ctx){ await D13(ctx); await D14(ctx); }

// D16: half_half_right_slow (mirror of 13)
async function D16(ctx){ await D13(ctx); }

// D17: half_half_left_slow (mirror of 14)
async function D17(ctx){ await D14(ctx); }

// D18: star_run_slow (decrementing Ado)
async function D18({R,G,B,S,E,M}){
  initStrip(M); clearStrip();
  if (Chc===0){ Ado = M-1; Chc=1; }
  if (Ado===1) Chc=0;
  for (let nd=0; nd<=Ado; nd++){
    setPixel(nd,R,G,B);
    await time1(S);
    clearStrip();
  }
  // white highlight at Ado
  for (let i=0;i<M;i++) if (i===Ado) setPixel(i,222,222,222);
  await time2(E);
  if (Chc===1) Ado--;
}

// D19: star_return_slow (same as 18 per your code)
async function D19(ctx){ await D18(ctx); }

// D20: star_runreturn_slow
async function D20({R,G,B,S,E,M}){
  initStrip(M); clearStrip();
  for (let nd=0; nd<M; nd++){
    setPixel(nd,R,G,B);
    await time1(S);
    clearStrip();
  }
  for (let nd=M-1; nd>=0; nd--){
    setPixel(nd,R,G,B);
    await time2(E);
    clearStrip();
  }
}

// D21: star_run_fast (step=5 + flash)
async function D21({R,G,B,S,E,M}){
  initStrip(M); clearStrip();
  const step = 5;
  for (let nd=0; nd<M; nd+=step){
    for (let k=0;k<step;k++){
      const i = nd+k; if (i<M) setPixel(i,R,G,B);
    }
    await time1(S);
    for (let k=0;k<step;k++){
      const i = nd+k; if (i<M) setPixel(i,0,0,0);
    }
  }
}

// D22: star_return_fast (reverse step=5)
async function D22({R,G,B,S,E,M}){
  initStrip(M); clearStrip();
  const step = 5;
  for (let nd=M-1; nd>=0; nd-=step){
    for (let k=0;k<step;k++){
      const i = nd-k; if (i>=0) setPixel(i,R,G,B);
    }
    await time2(E);
    for (let k=0;k<step;k++){
      const i = nd-k; if (i>=0) setPixel(i,0,0,0);
    }
  }
}

// D23: combine 21 + 22
async function D23(ctx){ await D21(ctx); await D22(ctx); }

// D24: snak_growup_slow
async function D24({R,G,B,S,E,M}){
  initStrip(M); clearStrip();
  for (let nd=1; nd<=4; nd++) setPixel(nd,R,G,B);
  T = (T<M) ? (T+5) : 1;
  for (let n=1; n<=(M-T); n++){ shiftRight(); await time1(S); }
  for (let nd=M-1; nd>=Math.max(M-3,0); nd--){ setPixel(nd,R,G,B); await sleep(1); }
  for (let n=1; n<=(M-T); n++){ shiftLeft(); await time2(E); }
}

// D25: star_playful
async function D25({R,G,B,S,E,M}){
  initStrip(M); clearStrip();
  for (let nd=1; nd<=4; nd++) setPixel(nd,R,G,B);
  const yfd = Math.floor(Math.random()*5)+1;
  T = (T<M) ? (T+yfd) : 1;
  for (let n=1; n<=(M-T); n++){ shiftRight(); await time1(S); }
  const xfd = Math.floor(Math.random()*5)+1;
  for (let nd=M-1; nd>=Math.max(M-xfd,0); nd-=5){ setPixel(nd,R,G,B); await sleep(1); }
  const vfd = Math.floor(Math.random()*Math.max(T,1));
  for (let n=1; n<=(M-vfd); n++){ shiftLeft(); await time2(E); }
}

// D26: snak_star_playful
async function D26({R,G,B,S,E,M}){
  initStrip(M); clearStrip();
  if (M<22) M=22;
  const rndN = () => Math.max(1, Math.floor(Math.random()*10));
  let PP = rndN();
  for (let nd=1; nd<=PP; nd++){ setPixel(nd,R,G,B); await sleep(1); }
  PP = rndN();
  T = (T<M) ? (T+1) : 1;
  T = Math.max(1, Math.min(M-1, Math.floor(Math.random()*T) + PP));
  for (let n=1; n<=(M-T); n+=PP){ shiftRight(); await time1(S); }
  for (let nd=M-1; nd>=Math.max(M-T,0); nd-=3){ setPixel(nd,R,G,B); await sleep(1); }
  PP = Math.max(3, rndN());
  for (let n=1; n<=(M-T); n+=PP){ shiftLeft(); await time2(E); }
  // second playful phase
  PP = rndN();
  T = (T<M) ? (T+1) : 1;
  T = Math.max(1, Math.min(M-1, Math.floor(Math.random()*T) + PP));
  let MD = Math.floor(Math.random()*M); if (MD<T) MD = T+1;
  for (let n=1; n<=(MD - T); n+=PP){
    const JD = M - PP;
    if (n>0) setPixel(n,R,G,B);
    if (JD>0) setPixel(JD,R,G,B);
    await time1(S);
  }
  for (let nd=M-T; nd<=M-1; nd+=3){ setPixel(nd,R,G,B); await sleep(1); }
  PP = Math.max(3, rndN());
  for (let n=M-T; n>=1; n-=PP){ shiftRight(); await time2(E); }
  for (let nd=1; nd<=PP; nd++){ setPixel(nd,R,G,B); await sleep(1); }
}

// D27: star_fillers
async function D27({R,G,B,S,E,M}){
  initStrip(M); clearStrip();
  Ado = (Ado<M) ? (Ado+1) : 1;
  for (let nd=1; nd<=Ado; nd+=4){ setPixel(nd,R,G,B); await sleep(1); }
  for (let n=1; n<=(M-Ado); n++){ shiftRight(); await time1(S); }
  for (let nd=M-1; nd>=Math.max(M-Ado,0); nd-=5){ setPixel(nd,R,G,B); await sleep(1); }
  for (let n=1; n<=(M-Ado); n++){ shiftLeft(); await time2(E); }
}

// D28: movable_light (white head + trail)
async function D28({R,G,B,S,E,M}){
  initStrip(M); clearStrip();
  const clamp200 = v => Math.min(v,200);
  R = clamp200(R); G = clamp200(G); B = clamp200(B);
  for (let nd=2; nd<M; nd++){
    setPixel(nd,255,255,255);
    await time1(S);
    setPixel(nd-1,255,255,255);
    await time2(E);
    setPixel(nd-2,R,G,B);
    await time1(S);
  }
  for (let nd=M-2; nd>=0; nd--){
    setPixel(nd,255,255,255);
    await time2(E);
    setPixel(nd+1,255,255,255);
    await time1(S);
    setPixel(nd+2,R,G,B);
    await time2(E);
  }
}

// D29: snak_runreturn_colored (randomized colors head/tail)
async function D29({R,G,B,S,E,M}){
  initStrip(M); clearStrip();
  for (let nd=0; nd<M; nd++){
    setPixel(nd, Math.floor(Math.random()*(R+1)), Math.floor(Math.random()*(G+1)), Math.floor(Math.random()*(B+1)));
    await time1(S);
  }
  for (let nd=M-1; nd>=0; nd--){
    setPixel(nd, Math.floor(Math.random()*(R+1)), Math.floor(Math.random()*(G+1)), Math.floor(Math.random()*(B+1)));
    await time2(E);
  }
}

// D30: star_diamonds_blink_slow
async function D30({R,G,B,S,E,M}){
  initStrip(M); clearStrip();
  const rr = Math.floor(Math.random()*(R+1));
  const gg = Math.floor(Math.random()*(G+1));
  const bb = Math.floor(Math.random()*(B+1));
  let nd = Math.floor(Math.random()*M);
  setPixel(nd, rr, gg, bb); await time1(S);
  nd = Math.floor(Math.random()*M);
  setPixel(nd, rr, gg, bb); await time2(E);
}

// D31: star_diamonds_blink_fast
async function D31({R,G,B,S,E,M}){
  initStrip(M); clearStrip();
  await time1(S); await time2(E);
  const nd = Math.floor(Math.random()*M);
  setPixel(nd, R, G, B);
}

// D32: star_diamonds_blink_faster (multiple blinks)
async function D32({R,G,B,S,E,M}){
  initStrip(M); clearStrip();
  await time1(S); await time2(E);
  for (let c=0; c<8; c++){
    const nd = Math.floor(Math.random()*M);
    setPixel(nd,R,G,B);
  }
}

// D33: disco
async function D33({R,G,B,S,E,M}){
  initStrip(M); clearStrip();
  const rnd = () => Math.floor(Math.random()*256);
  for (let i=0;i<M;i++){
    const idx = Math.floor(Math.random()*M);
    setPixel(idx, rnd(), rnd(), rnd());
    await time1(S);
  }
  for (let i=0;i<M;i++){
    const idx = Math.floor(Math.random()*M);
    setPixel(idx, 0,0,0);
    await time2(E);
  }
}

// D34: fillstripe_Color (random fill, hold)
async function D34({R,G,B,S,E,M}){
  initStrip(M);
  const rr = Math.floor(Math.random()*(R+1));
  const gg = Math.floor(Math.random()*(G+1));
  const bb = Math.floor(Math.random()*(B+1));
  fillStripe(rr,gg,bb);
  for (let i=0;i<200;i++){ await time1(S); await time2(E); }
}

// D35: breathing (fade down then up)
async function D35({R,G,B,S,E,M}){
  initStrip(M);
  let A1=R, A2=G, A3=B;
  for (let ll=0; ll<=255; ll++){
    if (A1<=1 && A2<=1 && A3<=1) break;
    if (A1>1) A1--; if (A2>1) A2--; if (A3>1) A3--;
    fillStripe(A1,A2,A3); await time1(S);
  }
  for (let ll=0; ll<=255; ll++){
    if (A1>=R && A2>=G && A3>=B) break;
    if (A1<R) A1++; if (A2<G) A2++; if (A3<B) A3++;
    fillStripe(A1,A2,A3); await time2(E);
  }
}

// D36: percolate (two-sided approach/retreat with toggles)
async function D36({R,G,B,S,E,M}){
  initStrip(M); clearStrip();
  nnb = 1 - nnb; // toggle
  if (nnb===1){
    for (let nd=0; nd<=Math.floor(M/2); nd++){
      setPixel(nd,R,G,B); await time1(S);
      const nnd = M-1-nd; setPixel(nnd,R,G,B); await time1(S);
      if (nd>0){ setPixel(nd-1,0,0,0); }
      await time2(E);
      setPixel(Math.min(nnd+1, M-1), 0,0,0);
      await time2(E);
    }
  }
  setPixel(Math.floor(M/2), 0,0,0); await time1(S);
  if (nnb===0){
    for (let nd=0; nd<=Math.floor(M/2); nd++){
      const nnd = Math.floor(M/2) - nd; setPixel(nnd,R,G,B); await time1(S);
      const pnd = Math.floor(M/2) + nd; setPixel(pnd,R,G,B); await time1(S);
      setPixel(nnd+1,0,0,0); await time2(E);
      setPixel(pnd-1,0,0,0); await time2(E);
    }
  }
}

// D37: percolate_snak (similar to D36 but without cleanup in second half)
async function D37({R,G,B,S,E,M}){
  initStrip(M); clearStrip();
  nnb = 1 - nnb;
  if (nnb===1){
    for (let nd=0; nd<=Math.floor(M/2); nd++){
      setPixel(nd,R,G,B); await time1(S);
      const nnd = M-1-nd; setPixel(nnd,R,G,B); await time1(S);
      if (nd>0) setPixel(nd-1,0,0,0);
      await time2(E);
      setPixel(Math.min(nnd+1, M-1), 0,0,0);
      await time2(E);
    }
  }
  setPixel(Math.floor(M/2), 0,0,0); await time1(S);
  if (nnb===0){
    for (let nd=0; nd<=Math.floor(M/2); nd++){
      const nnd = Math.floor(M/2) - nd; setPixel(nnd,R,G,B); await time1(S);
      const pnd = Math.floor(M/2) + nd; setPixel(pnd,R,G,B); await time1(S);
    }
  }
}

// D38: half_percolate_solid
async function D38({R,G,B,S,E,M}){
  initStrip(M); clearStrip();
  nnb = 1 - nnb;
  if (nnb===1){
    for (let nd=0; nd<=Math.floor(M/2); nd++){
      setPixel(nd,R,G,B); await time1(S);
      let nnd = M-1-nd; setPixel(nnd,R,G,B); await time1(S);
      if (nd>0){ setPixel(nd+1,0,0,0); }
      await time2(E);
      nnd = nnd-1; setPixel(Math.max(nnd,0), 0,0,0);
      await time2(E);
    }
  }
  setPixel(Math.floor(M/2), 0,0,0); await time1(S);
  if (nnb===0){
    for (let nd=0; nd<=Math.floor(M/2); nd++){
      let nnd = Math.floor(M/2) - nd; setPixel(nnd,R,G,B); await time1(S);
      let pnd = Math.floor(M/2) + nd; setPixel(pnd,R,G,B); await time1(S);
    }
  }
}

// D39: random select D01–D38
async function D39(ctx){
  const d = Math.floor(Math.random()*38)+1;
  ctx.D = d;
  await runMode(ctx);
}

// ---- Mode dispatcher ----
const modeMap = {
  0:D00, 1:D01, 2:D02, 3:D03, 4:D04, 5:D05,
  6:D06, 7:D07, 8:D08, 9:D09, 10:D10, 11:D11,
  12:D12, 13:D13, 14:D14, 15:D15, 16:D16, 17:D17,
  18:D18, 19:D19, 20:D20, 21:D21, 22:D22, 23:D23,
  24:D24, 25:D25, 26:D26, 27:D27, 28:D28, 29:D29,
  30:D30, 31:D31, 32:D32, 33:D33, 34:D34, 35:D35,
  36:D36, 37:D37, 38:D38, 39:D39
};

async function runMode(ctx){
  const fn = modeMap[ctx.D];
  if (!fn){ alert('Mode not implemented'); return; }
  await fn(ctx);
}

// ---- UI events ----
document.getElementById('run').onclick = async () => {
  const cmd = document.getElementById('cmd').value;
  const p = parseCmd(cmd);
  await runMode(p);
};

document.getElementById('play').onclick = async () => {
  const D = parseInt(document.getElementById('mode').value,10);
  const base = parseCmd(document.getElementById('cmd').value);
  base.D = D;
  await runMode(base);
};

document.getElementById('clear').onclick = clearStrip;

// ---- Auto-run default on load ----
window.onload = () => {
  document.getElementById('run').click();
};
