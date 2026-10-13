# SoifGo AI Complete Context & Documentation Map

**Purpose:** Comprehensive AI-readable reference for the SoifGo Android application and its official website resources. When a user asks about SoifGo, this file serves as the primary source of truth for all documentation, tutorials, native bridges, and ecosystem components.

**SoifGo Version:** 1.42 (VersionCode 142)
**Document revision:** 3 — added Section 14.10 (AC Clamp Meter).
**Platform:** Android (built with B4A / Basic4Android)
**Official Website:** https://soifgo.github.io/soifgo/
**GitHub:** https://github.com/soifgo/soifgo
**Forum:** https://github.com/soifgo/soifgo/discussions
**Support:** ssmqqmss@gmail.com

---

## 0. START HERE — Mandatory Operating Instructions for AI Assistants

**Read this section first. It defines how you begin every SoifGo conversation. Sections 1–12 are reference material for HTML/WebView development. Section 13 describes the app's own screens and menus; use it whenever you tell a user where to tap.**

### 0.0 How This File Is Organized (read once)

| Part | What it is | Use it for |
|---|---|---|
| Section 0 | Operating rules | How to start, classify, deliver |
| **Sections 0.2-A / 0.2-B** | **Creating the first button; Button Behavior definitions** | **Any "how do I start / add a button / which Behavior" question. Read before anything else about the app UI.** |
| Sections 1–9 | Reference | Subs, receivers, formats, limits |
| Section 13 | App screens and menus | Telling users where to tap |
| **Section 14** | **Complete, runnable examples** | **Start every WebView answer from the closest example here. Copy its structure instead of writing from memory.** |
| Section 15 | Troubleshooting table | Debugging broken pages |

**Rule:** the examples in Section 14 are verified patterns. Reuse their exact Sub names, receiver names, argument order and guards, then adapt the UI and logic.

### 0.1 Your Role

You are a SoifGo expert assistant. You help users build SoifGo projects: HTML pages for the SoifGo WebView, Classic-mode setups (buttons and sliders), and the hardware side (Arduino / ESP32 / ESP8266 code) that talks to SoifGo. Reply in the **same language the user writes in**. Keep code, Sub names, function names and on-screen menu names in English exactly as documented.

### 0.2 Source-of-Truth Rules

- Use **only** the Subs and receivers listed in Section 6 and the menu names listed in Section 13. **Never invent** a Sub, receiver, parameter, menu item or feature.
- If something is not covered here, say you are not sure and point to the official docs: https://soifgo.github.io/soifgo/docs.html and the Complete User Guide https://soifgo.github.io/soifgo/soifgo_info/soifgo_info.html . Do not guess.
- If the user asks for something SoifGo cannot do (see Section 9: no camera, no Bluetooth audio devices, the bridge does not exist in a normal browser), say so and offer the closest supported alternative.
- Current version: 1.42 (VersionCode 142).

### 0.2-A Creating the First Button (MANDATORY — read before telling any user to "add a button")

**Fact:** a new SoifGo project is EMPTY. A Button cannot be created until a **folder** and a **page** exist. The order is fixed and cannot be skipped:

**folder → page → objects (Button / SeekBar / Background / btnstartup)**

**Hard rules for AI assistants:**
1. Never write "add a button", "drag a button" or "create a button" as a single step. Always give the full chain below.
2. Never assume the user already has a folder or page. If the user did not say so, give the full chain.
3. Use the exact menu names below. Do not invent menu items.
4. Stop after the step the user needs. Do not explain Behaviors the user did not ask about; link them to 0.2-B instead.

#### The full chain (give this whenever the user has no button yet)

| Step | Where you are | Action | What you should see |
|---|---|---|---|
| 1 | **Play** (SoifGo always opens here, empty page) | Tap the **top-left icon** → first item **Edit** | The top-left icon changes to a Pause symbol. You are in **Edit**. |
| 2 | **Edit** | Top-left icon → **Select Design** | The list contains **only `folder`**. Nothing else is listed yet. This is normal. |
| 3 | **Select Design** | Tap **folder** → create a folder | A folder now exists. |
| 4 | **Select Design** | **Page** now appears in the list. Tap **Page** → create a **New Page** | A page exists. Tapping Page alone is not enough; a **New Page** must be created. |
| 5 | **Select Design** | **Background**, **Button** (max 40), **SeekBar** (max 10) and **btnstartup** now appear | The design list is complete. |
| 6 | **Select Design** | Tap **Button** (the number next to its icon is the **remaining** count out of 40) | A Button is placed at its **default position** (see "Default placement") and is immediately in **move mode** (see "Moving a button"). |
| 7 | **Edit** | Fix the button in place (tap it, or tap the close icon at the top, or press the phone Back button). Then the button is selected → top-left menu → **Behavior** → choose the behavior (see 0.2-B) | The button now has a function. |
| 8 | **Edit** | Top-left icon → first item **Play** | The project runs. Tap the button to use it. |

#### What the list shows and when (so you can diagnose "I don't see Button")

- Only `folder` visible → no folder exists yet. Create one.
- `folder` + `Page` visible but no `Button` → no page exists yet. Tap **Page** → **New Page**.
- **Search Button** appears only after at least one Button exists.
- **Search SeekBar** appears only after at least one SeekBar exists.
- On one page, Buttons, SeekBars and WebView buttons are **siblings**. They can be mixed freely and none depends on another.

#### Menu of a selected button (Edit)

When a button is selected, the top-left menu contains, in this order:
**Play · Select Design · Option · Undo · Redo** (Undo and Redo are icons only) **· Copy Properties · Paste Properties · Delete Object · Background · Name · Size · Move · Behavior · Audio · Vibra** — and **Effects** (last item). **Effects appears only after Behavior is set to a *Receive ... Value* option or *Connect Phone Sensor*.**

| Item | What it does |
|---|---|
| **Copy Properties** | Copies everything about the selected button **except its position** (design and behavior) |
| **Paste Properties** | Applies the copied properties to the currently selected (target) button |
| **Delete Object** | Deletes the selected button or slider. **Undo** brings it back (history is lost if the app is closed) |
| **Background** | Opens the button's appearance submenu (see "The button Background submenu"): **Button Color, Corner, Text Color, Text Size, font, Image File Explorer, Image Sample** |
| **Name** | Sets the text shown on the button |
| **Size** | Changes the button's size |
| **Move** | Opens the **Select Motion** dialog (see "Moving a button") |
| **Behavior** | Sets what the button does (see 0.2-B) |
| **Audio / Vibra** | Sound / vibration on tap (see 13.4) |

**Duplicating a designed button (fastest way to make a second similar button):**
1. Select the finished button → menu → **Copy Properties**.
2. Select the **target** button (tap it so its menu is ready) → menu → **Paste Properties**.
3. The target takes **everything** from the source **except its position**, including the behavior. Then only change what must differ (for example the Name or the sent text).

#### The button Background submenu

Edit → select button → top-left menu → **Background** opens a list with exactly these items:

| Item | What it does |
|---|---|
| **Button Color** | Sets the button's color: **one color or a two-color gradient** (opens the chooser and color panel below) |
| **Corner** | Rounds the button's corners |
| **Text Color** | Color of the text on the button |
| **Text Size** | Size of the text on the button |
| **font** | Font of the text |
| **Image File Explorer** | Uses a picture from the phone as the button's background |
| **Image Sample** | Uses a built-in sample picture as the background |

- **Corner works when the background is a color — a single color or a two-color gradient — but not when it is an image.** These are the limits of the underlying B4A drawing features; if the user set an image background, Corner has no effect until it is switched back to a color.
- **Button Color flow (Edit → select button → Background → Button Color):**
  1. A **3×3 chooser** appears first. The **center** cell is a **single, solid color**. The **8 surrounding cells** are **two-color gradients** in 8 directions (top, bottom, left, right and the four diagonals).
  2. **Single color:** pick the center cell, then choose the color in the color panel.
  3. **Two colors:** pick one of the 8 gradient cells. The color panel opens with a label at the top showing which side is being edited (for example `TOP : Color`). Choose a color — that side takes it. Then tap the **arrow button** (`<`) beside the preview swatch to **switch to the other side**, and choose a second color — the other side takes it. The label changes to match the side now being edited (for example `TOP : Color` becomes `BOTTOM : Color`; for the other directions it names the opposite side).
- **Color panel** (opened by Button Color): four sliders **R, G, B, A** (red, green, blue, alpha/transparency; 0–255) with a color-picker area and a preview swatch, then **two sliders with `<` and `>` buttons**:
  - the **upper** slider sets the **Corner** (roundness);
  - the **lower** slider, when a color is chosen, sets the **size of the colored bar (border) around the button** — it makes the bar thin or thick. A label at the top shows the value while dragging (for example `Size 9`). A red **X** at the top closes the panel.
- Tip for icons: **Text Size** and **font** are in this submenu, so the emoji-icon trick (Name = emoji, large text) uses **Background → Text Size**.

#### Button numbers and names

- **A button's number is a permanent internal index.** It never disappears, which is why **Search Button** can always find every button (see the recovery section).
- If a button is deleted, the numbers **shift**: with buttons 1–5, deleting 3 makes old 4 become 3 and old 5 become 4. This is only the **system order**. It does not change any button's behavior, look or name. Because layering follows the number (lower = behind), renumbering can change which button is in front.
- **A button's Name can be anything**, including an **emoji** typed from the phone keyboard. Icon trick: set the Name to an emoji, set the **Background** to transparent, and increase the font size — the button becomes an icon.
- A transparent Background with an empty Name makes the button **invisible** (see the recovery section).
- **Identifying a button (works even if its Name is empty):** in Edit, **tap the button**. A small label appears at the top of the screen showing its **number (index)** and its current **Behavior**: `Button 2   None` means button 2 has no Behavior set; `Button 1   web` means button 1 is a **WebView** button (the Behavior is labeled `web`). The number is kept even when the Name is empty and the Background is transparent.
- When a button has a Behavior, tapping it in Edit also opens the **Behavior window** (see the next subsection).

#### The Behavior window (Edit)

When a button already has a Behavior, tapping it in Edit opens a window that shows that Behavior and its settings. Structure:

1. **Title bar** (Behavior name + its icon, for example `web` with an HTML folder icon, or `Send Server` with an MQTT icon). **Tapping the title bar opens the Select Behavior list**, where the Behavior can be changed (same list as **Behavior** in the button menu).
2. **Setting rows.** Each row has a label bar and, below it, the current value. Tapping a row edits that setting. The rows depend on the Behavior.
3. **`Option` bar** (for example `> Option <` or beside `Topic`). It opens a dialog with the **extra options of that Behavior**. What it contains depends on the Behavior.

Examples seen on screen:
- **WebView (`web`):** the title is `web` in both modes, but the icon and the text below the title bar change with the mode. The row under the `> Option <` bar is a **text input** (tap it to edit):
  - **Offline** — icon: HTML folder; text: `HTML Open or Edit Local HTML File in WebView`; the input row shows the **linked HTML file name** (example: `calculator`).
  - **Online** — icon: blue globe with `www.`; text: `Open URL in Browser`; the input row is the **address that will open**. The **default is `https://www.google.com/`**. The user can type any address (for example `https://claude.ai/chat/`), and that page opens when the button is tapped in Play.
  - The `Option` dialog is titled **Select Behavior** and switches between **Open URL in Browser** (Online) and **Open or Edit Local HTML File in WebView.Html** (Offline).
- **Send Server (MQTT):** rows **Address** (example `tcp://test.mosquitto.org:1883`), **Text OR Value** (the text/value to send, example `port1:1`) and **Topic**, plus an **Option** dialog titled **Select?** with: **client id**, **user name**, **password**, **QOS**.

**WebView toolbar in Play (seen on screen):** when a WebView button is tapped in Play, the page opens with a top bar containing: the **Play** symbol at the top-left (the main menu icon), a **green left arrow** (browser **Back**), a **blue right arrow** (browser **Forward**), a **pink minus** button (**minimizes** the WebView), a **red X** (**closes** the WebView) and the **Bluetooth** icon at the top-right. They work like the buttons of a normal browser. This applies to an Online page (example: a website) as well as an Offline HTML page.

A button with no Behavior (`None`) shows no Behavior window.

#### Default placement (what the user sees after tapping Button / SeekBar)

- Next to the **Button** and **SeekBar** icons in Select Design, a **number shows how many are still available** (Buttons: 40 per page, SeekBars: 10 per page). The number decreases each time one is added.
- Every new object is placed at a **default position**, automatically arranged like a brick pattern. If the user adds all of them without moving any: the **40 Buttons fill the upper half** of the page and the **10 SeekBars fill the lower half**.
- Once an object is added (for example Button 1), it appears at its default position and follows the finger (move mode).

#### Moving a button (Touch Motion, Fine Motion, Match with the other button)

**Right after adding (move mode is active):**
- The button follows the finger anywhere on the page.
- **Do NOT touch the button itself to move it.** Touch an **empty area** of the page: the button jumps under the finger and moves with it.
- Move mode stays active until the user does one of these (all of them lock the button in place and prevent accidental touches):
  1. taps the **button**,
  2. taps the **close icon** at the top,
  3. presses the phone **Back** button.

**To move it again later:**
1. Tap the **button** so its menu is ready.
2. Top-left icon (the Pause symbol in Edit) → **Move**.
3. A dialog titled **Select Motion** opens with these items: **Cancel** (selected by default; closes without changes), **Touch Motion**, **Fine Motion**, **Match with the other button**. Choose one of the last three:

| Option | What it does | How it ends |
|---|---|---|
| **Touch Motion** | Free movement by dragging a finger on an empty area (same as move mode above) | Tap the button, the top close icon, or phone Back |
| **Fine Motion** | Shows **4 arrow icons** (up / down / left / right). Each tap moves the button a **tiny step**. For precise positioning | Top close icon or phone Back |
| **Match with the other button** | Moves this button **exactly onto the position of another button chosen from a list**, and places it **on top of** that button | Done after the selection |

**Match with the other button — important details:**
- It copies the position of the chosen button. A dialog titled **Select? : Button** lists the other buttons by name (**B1**, **B2**, ...; buttons get these default names). The user picks the target from that list.
- **Layering follows the button number:** the **lower number stays at the back**, the higher number is in **front**. Example: between Button 1 and Button 2, Button 2 is in front and Button 1 is behind.
- Typical use (gauge / needle): Button 2 has a meter picture as its **Background**; Button 5 is made thin with a needle/arrow as its **Background**. Use **Match with the other button** on Button 5 and choose Button 2, so the needle lands exactly on the gauge face (5 is higher than 2, so the needle is in front).
- **SeekBars do NOT have this option.** It is Buttons only.
- Because of the layering rule, warn the user to think about the numbers: the object that must be visible on top needs the higher button number.

#### A button or slider is lost / invisible — recovery (give this when a user says "my button disappeared")

**Why it happens:** (a) the button was pushed **behind** another object (for example with **Match with the other button**, or because its number is lower), or (b) the user made it invisible by setting its **Background** to **transparent** and clearing its **Name** (empty), or (c) it was moved to an unexpected place.

**Fix 1 — Undo / Redo (quick, but temporary):**
- In the Edit menu, tap the **Undo** icon to step back through the mistake (this also **restores an object removed with Delete Object**). Tap **Redo** only if you went back too far.
- **Undo/Redo history is lost when the app is closed.** If the app was closed since the mistake, use Fix 2.

**Fix 2 — Search Button / Search SeekBar (always works):**
1. **Edit** → top-left icon → **Select Design** → **Search Button**. (**Search Button** appears only if at least one Button exists; for sliders use **Search SeekBar**, which appears only if at least one SeekBar exists.)
2. A **slider** appears whose range matches the number of buttons on the page (for example, 4 buttons → 4 positions).
3. **Drag the slider** (for example to the right). At each value, the corresponding button **turns red and blinks** on the page.
4. When the lost button (for example button 2 of 4) is the one blinking, open the top-left menu. **While it blinks, the menu is bound to that button.**
5. Change something visible: **Name** or **Background** (a SeekBar also has **Color**). The object becomes visible again.
6. If it is simply hidden behind another object, use **Move** (Section above) to relocate it.

---

### 0.2-B Button Behaviors — Definitions and Which One To Pick

A Button is essentially a **label**: it can send, receive, show values and run effects. Its function is set in **Edit → select button → top-left menu → Behavior**.

#### Behavior list (exact names)

| Behavior | What it does | Needs Effects? | Typical use |
|---|---|---|---|
| **Reset** | Clears the button's last configured behavior | No | Start over |
| **Send** | Sends a **fixed text** every time the button is tapped. Sub-options: *Send Bluetooth*, *Send SMS*, *Send Server Api*, *Send Server MQTT* | No | ON / OFF commands |
| **Receive** | Shows or reacts to incoming data. Sub-options below | Only for *Value* types | Display a sensor, gauge, needle |
| **Browser or HTML File** | Makes the button host its own **WebView** (Online URL, or Offline HTML file). The `window.soifgo` bridge works in both | No | Custom dashboards, charts, complex logic |
| **Image** | Simple image viewer. The user picks a picture from the gallery once; SoifGo stores it internally and shows it on tap | No | Schematics, reference images |
| **Note** | Sends a prepared list of commands line by line (optionally waiting for a reply between lines). Also has **Gcod** for G-code (see 13.7) | No | Command sequences, CNC |
| **PDF** | Shortcut to a PDF kept in the project. Opens in an **external app** | No | Manuals |
| **Open_folder** | Reloads another existing **folder** in Play | No | Menu network |
| **Open Page** | Lists existing pages; the chosen page is loaded in Play and the previous page is closed | No | Menu network |
| **Bar+1 / Bar-1** | Makes the button move a chosen **SeekBar** by **one unit** each tap in Play (+1 or -1). After choosing the Behavior, a **list of the page's SeekBar numbers** appears; pick the one to control | No | Fine adjustment of a slider with a large range (for example 0–10000) that a finger cannot set precisely |
| **Bar Value** | Shows the **current value of a chosen SeekBar** on the button, like a label (only if the user selects a slider for it) | No | Displaying a slider's number |

**Audio** and **Vibra** are NOT behaviors. They are separate menu items that make any button play a sound or vibrate when tapped.

#### Receive sub-options

| Sub-option | Data shown as | Source | Effects |
|---|---|---|---|
| *Receive Bluetooth Text* | Text on the button | Bluetooth | No |
| *Receive Bluetooth Value* | Number | Bluetooth | **Yes** |
| *Receive Server Text Api* | Text | API | No |
| *Receive Server Value Api* | Number | API | **Yes** |
| *Receive Server Text MQTT* | Text | MQTT | No |
| *Receive Server Value MQTT* | Number | MQTT | **Yes** |
| *Connect Phone Sensor* | Number | The **phone's own sensor** (Light, Motion X, Motion Y, Magnetic) | **Yes** |

- **Text** options have **Start Word** / **End Word** filters. Both empty = everything received is shown.
- **Value** options have **Input MAX Value**, **Start Word for Value**, **End Word for Value**, **Show Value On/Off**.
- Example: microcontroller sends `temp=25cg`; Start Word `temp=`, End Word `cg`, Max `100` → SoifGo reads `25`.
- SMS is send-only. SeekBars never receive. **Only buttons receive.**

#### Decision guide — which Behavior for what the user wants

| User wants | Use |
|---|---|
| Send ON / OFF or a fixed word | **Send** → *Send Bluetooth* (or API / MQTT / SMS) |
| Show one value or text from Arduino/ESP | **Receive** → *Bluetooth Text* or *Bluetooth Value* |
| A dial / needle / bar driven by a value | **Receive** → a *Value* option, then **Effects** (Rotation, Size, Circular...) |
| Show a phone sensor value without code | **Receive** → **Connect Phone Sensor** |
| Dashboard, chart, multiple features, custom logic | **Browser or HTML File** (WebView) — preferred default |
| Send many prepared lines | **Note** |
| Open another screen of the project | **Open Page** / **Open_folder** |
| Precise ±1 adjustment of a slider with a large range, or showing a slider's value | Buttons with **Bar+1** / **Bar-1**, and **Bar Value** as a label (Section 13.5) |
| A second button designed like an existing one | **Copy Properties** on the finished button, then **Paste Properties** on the target (everything except position is copied) |
| A slider that sends 0–max | Not a Button. Use **SeekBar** (sender only) |

#### Minimal template for the AI's answer

When a user says "how do I start" or "how do I add a button", answer in the user's language using this skeleton:
1. State that the project is empty and a folder and page must exist first.
2. Give the 8-step chain from 0.2-A.
3. Ask which Behavior they need, or pick one from the decision guide above.
4. Only then continue with code (Section 14) or Classic settings (Section 13.4).


### 0.3 Step-by-Step Start Procedure

**Step 1 — Classify the request.**

| User wants... | Use | Go to |
|---|---|---|
| Simple label / one value / simple gauge / simple buttons, no coding | Classic mode (button + Behavior + Effects) | Sections 7 and 13 |
| Custom dashboard, charts, several features combined, custom logic, anything complex | **WebView mode (HTML/JS) — the preferred default** | Sections 3–6, 13.6 |
| Control Arduino/ESP over Bluetooth | WebView + Bluetooth (or Classic Send) | Sections 4–5, 13 |
| IoT over WiFi | WebView + MQTT | Sections 4–5 |
| Web data, prices, REST APIs | WebView + API | Sections 4, 5, 8 |
| Phone sensors | WebView + Sensors, or Classic `Connect Phone Sensor` | Sections 4–5, 13.4 |
| Voice / speech | WebView + Microphone | Section 4 (Microphone) and the Voice tutorial link |
| Send a prepared list of commands line by line (and optionally wait for a reply between lines) | Classic **Note** behavior | Section 13.7 |
| Draw/design shapes or load an image and get G-code for a CNC | Note menu → **Gcod** (then send the G-code with Note out → Bluetooth Send) | Section 13.7 |
| "How do I start?" / no button yet / no idea yet | Give the full folder → page → button chain | **Section 0.2-A** (then 0.2-B, 13.1–13.3) |

**WebView first:** for anything beyond a simple display (calculations, charts, custom UI, combining features), a WebView page is more flexible than the Classic Effects. Prefer it unless the user clearly wants the simple Classic route.

**Step 2 — Decide whether to ask.**
- If the user gave an idea (even a rough one), **do not interrogate them**. Build a complete, simple first version, state your assumptions in one line, and refine afterwards.
- Only if the message is completely empty of content ("I want to build something"), ask **one short question**: *What do you want to control or display?*
- Ask at most one or two questions, and only when the answer changes the code (typical: which connection — Bluetooth / MQTT / API — and which board).

**Step 3 — Deliver a complete, runnable result.** Default output is **one self-contained HTML file** (HTML + CSS + JS together) that the user can paste straight into SoifGo. If hardware is involved, also give the matching Arduino/ESP sketch with the baud rate and the exact text protocol (for example `ON\n` / `OFF\n`) so both sides agree.

**Step 4 — Tell the user exactly how to run it** (use the real menu names; details in Section 13):
1. SoifGo always opens in **Play**. Tap the top-left icon → first item **Edit**.
2. If the user has no button yet, give the full chain from **Section 0.2-A** (Edit → Select Design → folder → Page → New Page → Button). Never just say "add a button".
3. With the button created, select it, open the top-left menu → **Behavior** → **Browser or HTML File** → choose **HTML file** (Offline) or **Online** (give a URL).
   - **On-screen wording:** Offline is labeled **Open or Edit Local HTML File in WebView.Html**; Online is labeled **Open URL in Browser**. If the user's screen shows these labels, they are the same two choices.
   - Use **HTML file** when the page is created or pasted inside SoifGo (most common for AI-generated code).
   - Use **Online** when the page lives on a web server.
   - This step only **DEFINES** the WebView. It does **not** open the code editor.
   - Older tutorials on the website word this path as **Behavior → Web → Web Offline HTML → Create**. It is the same feature. Use the names in this file, but if the user's screen shows the other wording, follow what their screen shows.
4. **To paste your HTML code into the WebView, follow this exact order every time:**

   **FIRST TIME ONLY (defining the WebView):**
   - In **Edit**, select the button → top-left menu → **Behavior** → **Browser or HTML File** → **HTML file**.
   - At the end of this path, SoifGo shows the list of **reload options**:
     • Create the default **Hello SoifGo** page.
     • Pick an HTML file from the phone (File Explorer).
     • Use SoifGo's **sample files** (built-in examples).
     • Browse the project's **HTML files folder** to recall a page saved earlier.
   - Pick one — the WebView is defined with that file.
   - **Do NOT paste code here.** This screen is not a code editor.

   **EVERY TIME YOU WANT TO EDIT THE CODE:**
   - Go to **Play**.
   - Tap the **WebView button**. The WebView opens and loads.
   - Inside the WebView, open its **top-left menu → Edit**.
     (There is **no Behavior dialog** here — you are already inside the WebView's own menu.)
   - The **code editor** opens. In its top-left menu → **Select All and Paste**.
     Your clipboard replaces the entire file.
   - ⚠️ **Before tapping X, wait until the code changes from plain black to colored** (syntax highlighting has finished loading). Closing too early can lose the pasted code.
   - Tap the **yellow X (close icon)** at the top to close and **save**.
     The WebView **reloads automatically** with the new code.
   - **Repeat this exact order every time you change the code:**
     Play → tap WebView button → WebView menu → Edit →
     editor menu → Select All and Paste → yellow X → reload.
5. Pair the Bluetooth module in Android Settings first if Bluetooth is used.

### 0.4 Non-Negotiable Code Rules

1. Always call the bridge as `window.soifgo.CallSub('subName', true, arg1, arg2, arg3)`. The second argument is the B4A `callUIThread` flag and is **always `true`** in SoifGo code (it makes the Sub run on the UI thread; a Sub called this way returns no value to JavaScript). **Maximum 3 arguments** after it.
2. Always guard: `if (window.soifgo) { ... }`.
3. Never omit empty arguments — pass `''`.
4. Register every receiver on `window` (`window.html_bluetooth_tx = html_bluetooth_tx;`).
5. Compare MQTT status with `=== 'true'` (it arrives as a string).
6. `api_recive` needs **both** `address` and `key`; `api_rx` may deliver a plain value or a B4A Map string — use `extractValue()` from Section 8.
7. Activate sensors and request microphone permission inside `window.onload`. If a page uses **any** phone sensor, call **all three** activation Subs: `sensor_light`, `sensor_move`, `sensor_magno`.
8. Wrap `localStorage` access in `try/catch`.
9. For polling APIs respect the rate limits in Section 8 and provide a **Stop** button.
10. No external libraries unless the user asks; plain HTML/CSS/JS works offline.
11. Start from the closest example in Section 14; do not write bridge code from memory.
12. Every sensor receiver gets **one value as a string**. Never assume `(x, y, z)` tuples, `data.x`, or a vector. The magnetometer is one value (Section 9). Never invent a Sub called `Connect_Phone_Sensor`; that is the name of a **Classic** button behavior, not a bridge Sub.

### 0.5 Minimal Starter Template

Base every WebView answer on this skeleton and add the requested features:

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>SoifGo Page</title>
<style>
  body { font-family: sans-serif; margin: 0; padding: 16px; background: #111; color: #eee; }
  button { padding: 14px 20px; font-size: 18px; margin: 6px; border-radius: 10px; border: 0; }
  #status { margin-top: 12px; opacity: .8; }
</style>
</head>
<body>
  <button onclick="send('ON')">ON</button>
  <button onclick="send('OFF')">OFF</button>
  <div id="status">Waiting...</div>

<script>
function send(txt) {
  if (window.soifgo) {
    window.soifgo.CallSub('html_bluetooth_rx', true, txt);
  } else {
    document.getElementById('status').textContent = 'Not running inside SoifGo';
  }
}

function html_bluetooth_tx(data) {
  document.getElementById('status').textContent = data;
}
window.html_bluetooth_tx = html_bluetooth_tx;

window.onload = function () {
  if (window.soifgo) {
    // Phone sensors: if the page uses ANY sensor, activate ALL THREE (see 14.3):
    // window.soifgo.CallSub('sensor_light', true);
    // window.soifgo.CallSub('sensor_move', true);
    // window.soifgo.CallSub('sensor_magno', true);
    // Microphone (see 14.4):
    // window.soifgo.CallSub('request_mic_perm', true, null);
  }
};
</script>
</body>
</html>
```

### 0.6 Pre-Send Checklist

Every `CallSub` name exists in Section 6 · second argument is `true` · max 3 arguments · every receiver is registered on `window` · bridge is guarded · hardware sketch and HTML use the same protocol and baud rate · menu names match Section 13 exactly · if sensors are used, all three are activated · the page was based on a Section 14 example · answer is in the user's language.

### 0.7 Common Opening Cases

- **"What is SoifGo?"** → 3–4 sentences from Section 1, then ask what they want to build.
- **"How do I start?"** → Section 0.2-A (full chain: Play → Edit → Select Design → folder → Page → New Page → Button), then 0.2-B for the Behavior. Pair the Bluetooth module in Android Settings. Link the Complete User Guide.
- **"Make me a page/app for X"** → Steps 1–4 above. Do not ask for details you can reasonably assume.
- **User pastes broken code or an error** → find the cause first (usually: missing guard, unregistered receiver, wrong argument count, string-vs-boolean, second argument not `true`), fix it, and explain in one or two lines.

---

## 1. What is SoifGo

SoifGo is a specialized Android application designed to execute HTML pages inside a powerful WebView container. It seamlessly injects a native JavaScript object named `window.soifgo`, empowering web pages to interact directly with hardware and device features without needing heavy native development frameworks.

### Core Concept

SoifGo is not simply a Bluetooth controller application.

It is an Android hardware control and application platform that allows users to create complete applications using either native SoifGo components or HTML/CSS/JavaScript running inside embedded WebViews.

A SoifGo project can range from a simple Arduino controller to a complete dashboard, engineering tool, IoT control panel, visualization system, automation interface, data logger, or custom mobile application.

The main philosophy of SoifGo is to reduce the need for traditional Android development by allowing rapid application creation directly inside the platform.

### Key Supported Features

- **Bluetooth Serial:** Bi-directional communication with microcontrollers (HC-05, HC-06, JDY-31, Arduino, ESP32, ESP8266, Raspberry Pi).
- **Phone Sensors:** Real-time data streams from ambient light, accelerometer (X and Y axes), and magnetometer.
- **Voice Integration:** Built-in microphone processing and speech-to-text routines (supporting 22 languages).
- **IoT & Networking:** Built-in MQTT client and HTTP API networking client.
- **Local Storage & UI:** Persistent `localStorage` support paired with native Android dialog popups (`alert`, `confirm`, `prompt`).
- **WebView:** Online and offline HTML execution, each button can host its own independent WebView.
- **Classic Mode:** Native buttons and sliders with behaviors, effects, and navigation — no HTML needed.

### Use Cases

- Building calculation and engineering tools;
- Building tools needed in a workshop;
- Controlling IoT devices;
- Controlling robots and microcontrollers;
- Sending and receiving data over Bluetooth, MQTT, and API;
- Building 2D and 3D applications;
- Data analysis and chart display;
- Running HTML pages and Web Applications;
- Controlling advertising boards and WS2812 LED strips;
- Controlling CNC machines.

---

## 2. Official Website & Documentation Index

All official documentation is hosted at `https://soifgo.github.io/soifgo/`.

### Core Documentation

- **Complete User Guide:** https://soifgo.github.io/soifgo/soifgo_info/soifgo_info.html
- **Developer Documentation & API Reference:** https://soifgo.github.io/soifgo/docs.html
- **HTML Guide (Bluetooth, Sensors, Microphone, MQTT, API, Storage):** https://soifgo.github.io/soifgo/send_bluetooth_html/html_guide_1.html
- **Microphone & Speech Recognition Guide (22 languages):** https://soifgo.github.io/soifgo/serial_voice/serial_voice_tutorials.html

### Tutorials

- **Bluetooth Example (HC-05/06):** https://soifgo.github.io/soifgo/BluetoothExample1/bluetooth_sample1.html
- **Bluetooth Send Receive:** https://soifgo.github.io/soifgo/BluetoothSendReceive/Bluetooth_Send_Receive.html
- **Create Page:** https://soifgo.github.io/soifgo/page/Create_Page.html
- **Page & Folder Navigation:** https://soifgo.github.io/soifgo/pagefolder/page_folder.html
- **ESP8266 MQTT:** https://soifgo.github.io/soifgo/Esp8266_wifi_mqtt/esp8266_mqtt.html
- **Local Server Setup (Node.js):** https://soifgo.github.io/soifgo/LocalServerSetup/Local-server_api.html
- **ESP32 Server (WiFiServer/WebServer API):** https://soifgo.github.io/soifgo/ESP32Server/ESP8266_wifi_api.html
- **Fetching APIs (REST + JSON):** https://soifgo.github.io/soifgo/FetchingAPIs/Api-fetching_api.html
- **Working with HTML Files:** https://soifgo.github.io/soifgo/WorkingwithHTMLFiles/html01.html
- **Effects (Rotation, Gauge, Color Shift):** https://soifgo.github.io/soifgo/Effect/effects.html
- **Voice to Serial Bluetooth:** https://soifgo.github.io/soifgo/serial_voice/serial_voice_tutorials.html
- **Note Send and Receive:** https://soifgo.github.io/soifgo/note_out/note_out.html
- **RANGMANG:** https://soifgo.github.io/soifgo/rangmang/Rangmang.html
- **RANGMANG 2 (WS2812 pixel LED sign designer, runs inside Note):** https://soifgo.github.io/soifgo/rangmang2/rangmang2.html
- **CMI209 (microcontroller driver for a 3-axis CNC; also an IoT project example):** https://soifgo.github.io/soifgo/cmi209/cmi209.html

### Working Examples (HTML + Bluetooth + Arduino)

- **HTML Guide + 4 Examples:** https://soifgo.github.io/soifgo/send_bluetooth_html/html_guide_1.html
  - LED Blink
  - Sensor Readout
  - Speed Control
  - Phone Sensors
- **Download all examples (ZIP):** https://soifgo.github.io/soifgo/send_bluetooth_html/html_sample.zip
- Per-example code pages: `.../send_bluetooth_html/01-led-blink/code.html`, `02-sensor-readout/code.html`, `03-speed-control/code.html`, `04-phone-sensors/code.html` (all under `https://soifgo.github.io/soifgo/`). Complete versions of the same patterns are also inside this file in Section 14.

## 3. The Bridge Architecture — `window.soifgo.CallSub`

Communication from local or remote web scripts back to the native B4A environment relies on a standardized syntax:

```javascript
window.soifgo.CallSub('subName', true, arg1, arg2, arg3);
```

### Rules

- The first argument is the **Sub name** (string).
- The second argument is the B4A `callUIThread` flag. In SoifGo code it is **always `true`** (the Sub runs on the UI thread and returns no value to JavaScript).
- After the flag, you can pass **up to 3 arguments**.
- Empty strings must still be passed as `''` — never omit them.
- Always guard with `if (window.soifgo) { ... }` — the bridge only exists inside SoifGo.
- In a normal browser, `window.soifgo` is `undefined`.

---

## 4. Available Subs — Send (called from JavaScript)

These are the Subs you call from your HTML/JS code.

### 🔵 Bluetooth

#### `html_bluetooth_rx`

```js
window.soifgo.CallSub('html_bluetooth_rx', true, txt);
```

Sends text to the connected Bluetooth device.

| Parameter | Type | Description |
|---|---|---|
| `txt` | string | The text to send |

```js
window.soifgo.CallSub('html_bluetooth_rx', true, 'ON');
```

---

### 🟢 Sensors

#### `sensor_light`

```js
window.soifgo.CallSub('sensor_light', true);
```

Activates the light sensor. SoifGo starts sending light data to `html_sensor_light`.

#### `sensor_move`

```js
window.soifgo.CallSub('sensor_move', true);
```

Activates the movement sensor. SoifGo starts sending X/Y data to `html_sensor_movex` and `html_sensor_movey`.

#### `sensor_magno`

```js
window.soifgo.CallSub('sensor_magno', true);
```

Activates the magnetic sensor. SoifGo starts sending data to `html_sensor_magno`.

> **Note:** To activate the sensors you must call **all three** (`sensor_light`, `sensor_move`, `sensor_magno`) — the official guide requires it. Call them inside `window.onload`.

---

### 🎤 Microphone

#### `request_mic_perm`

```js
window.soifgo.CallSub('request_mic_perm', true, null);
```

Requests microphone permission. Shows the native Android dialog the first time only.

> **Note:** After the user allows once, Android remembers the choice. Later calls are silently ignored. If the user denies, features like sound metering, voice command, and speech-to-text will not work.

---

### 🟣 MQTT

#### `connecte_mqtt_ai`

```js
window.soifgo.CallSub('connecte_mqtt_ai', true, address, id);
```

Step 1 of the MQTT connection — address and Client ID.

| Parameter | Type | Description |
|---|---|---|
| `address` | string | Broker URL: `tcp://host:1883` or `ssl://host:8883`. Empty → defaults to `tcp://test.mosquitto.org:1883` |
| `id` | string | Client ID. Empty → auto-generated `soifgo_XXXX` |

#### `connecte_mqtt_up`

```js
window.soifgo.CallSub('connecte_mqtt_up', true, username, password);
```

Step 2 (optional) — authentication. Only call if the broker requires a username/password.

| Parameter | Type | Description |
|---|---|---|
| `username` | string | Broker username (empty string if none) |
| `password` | string | Broker password (empty string if none) |

#### `mqtt_publish`

```js
window.soifgo.CallSub('mqtt_publish', true, topic, message, qos);
```

Publishes a message to a topic. **Also auto-subscribes** you to that topic.

| Parameter | Type | Description |
|---|---|---|
| `topic` | string | Topic name (e.g. `soifgo/led`) |
| `message` | string | Text payload |
| `qos` | string | `"0"`, `"1"`, or `"2"` |

#### `mqtt_Disconnect`

```js
window.soifgo.CallSub('mqtt_Disconnect', true);
```

Disconnects from the broker. No arguments.

#### `mqtt_status`

```js
window.soifgo.CallSub('mqtt_status', true);
```

Asks SoifGo for the current connection status. SoifGo replies by calling `html_mqtt_status('true')` or `html_mqtt_status('false')`.

---

### 🟠 API

#### `api_send`

```js
window.soifgo.CallSub('api_send', true, address, key, value);
```

Sends a POST request with a JSON body.

| Parameter | Type | Description |
|---|---|---|
| `address` | string | API endpoint URL |
| `key` | string | JSON key name |
| `value` | string | Value to send |

Body sent: `{"<key>":"<value>"}` with `Content-Type: application/json`.

#### `api_recive`

```js
window.soifgo.CallSub('api_recive', true, address, key);
```

Sends a GET request. SoifGo extracts the branch of the JSON matching `key` and returns it via `api_rx`.

| Parameter | Type | Description |
|---|---|---|
| `address` | string | API endpoint URL |
| `key` | string | JSON key to extract (e.g. `Price`). **Required** |

> **Note:** The response format depends on the API provider. It can arrive as a plain value (`86846.51`) or as a wrapped map (`{usd=86750}`). See the API Response Formats section below.

---

## 5. Available Receivers — Called by SoifGo

SoifGo calls these functions on your page when data arrives. **You must register them on `window`:**

```js
function myReceiver(data) { /* ... */ }
window.myReceiver = myReceiver;
```

### 🔵 Bluetooth

#### `html_bluetooth_tx`

```js
function html_bluetooth_tx(data) {
    document.getElementById('output').textContent = data;
}
window.html_bluetooth_tx = html_bluetooth_tx;
```

Called when Bluetooth data arrives.

| Parameter | Type | Description |
|---|---|---|
| `data` | string | The received Bluetooth data |

---

### 🟢 Sensors

#### `html_sensor_light(data)` — light sensor value
#### `html_sensor_movex(data)` — movement sensor X-axis
#### `html_sensor_movey(data)` — movement sensor Y-axis
#### `html_sensor_magno(data)` — magnetic sensor value (ONE value, string; no components)

```js
function html_sensor_light(data) { /* ... */ }
function html_sensor_movex(data) { /* ... */ }
function html_sensor_movey(data) { /* ... */ }
function html_sensor_magno(data) { /* ... */ }

window.html_sensor_light = html_sensor_light;
window.html_sensor_movex = html_sensor_movex;
window.html_sensor_movey = html_sensor_movey;
window.html_sensor_magno = html_sensor_magno;
```

---

### 🟣 MQTT

#### `mqtt_rx`

```js
function mqtt_rx(topic, message) {
    console.log(topic, message);
}
window.mqtt_rx = mqtt_rx;
```

Called when a message arrives on a subscribed topic.

| Parameter | Type | Description |
|---|---|---|
| `topic` | string | The topic the message arrived on |
| `message` | string | The message payload |

#### `html_mqtt_status`

```js
function html_mqtt_status(connected) {
    const isConnected = (connected === true || connected === 'true');
    // use isConnected
}
window.html_mqtt_status = html_mqtt_status;
```

Called in response to `mqtt_status`.

| Parameter | Type | Description |
|---|---|---|
| `connected` | string | `'true'` or `'false'` — **arrives as a string, not a boolean** |

> ⚠️ **Important:** `'false'` (the string) is **truthy** in JavaScript. Always compare with `=== 'true'`.

---

### 🟠 API

#### `api_rx`

```js
function api_rx(number) {
    const price = parseFloat(String(number).replace(/[^\d.-]/g, ''));
    document.getElementById('price').textContent = '$' + price;
}
window.api_rx = api_rx;
```

Called with the API response.

| Parameter | Type | Description |
|---|---|---|
| `number` | string | The extracted value. May be a plain number (`86846.51`) or a wrapped map (`{usd=86750}`) |

> ⚠️ **Important:** Handle both response formats. See the API Response Formats section below.
## 6. Complete Sub List (Quick Reference)

### Send (CallSub)

| Sub | Arguments | Purpose |
|---|---|---|
| `html_bluetooth_rx` | `txt` | Send text to Bluetooth |
| `sensor_light` | — | Activate light sensor |
| `sensor_move` | — | Activate movement sensor |
| `sensor_magno` | — | Activate magnetic sensor |
| `request_mic_perm` | `null` | Request microphone permission |
| `connecte_mqtt_ai` | `address, id` | MQTT connect step 1 |
| `connecte_mqtt_up` | `username, password` | MQTT connect step 2 (optional) |
| `mqtt_publish` | `topic, message, qos` | Publish MQTT message |
| `mqtt_Disconnect` | — | Disconnect MQTT |
| `mqtt_status` | — | Check MQTT status |
| `api_send` | `address, key, value` | Send API POST |
| `api_recive` | `address, key` | Receive API GET |

### Receivers (called by SoifGo)

| Function | Arguments | Purpose |
|---|---|---|
| `html_bluetooth_tx` | `data` | Receive Bluetooth data |
| `html_sensor_light` | `data` | Receive light sensor data |
| `html_sensor_movex` | `data` | Receive movement X data |
| `html_sensor_movey` | `data` | Receive movement Y data |
| `html_sensor_magno` | `data` | Receive magnetic sensor data |
| `mqtt_rx` | `topic, message` | Receive MQTT message |
| `html_mqtt_status` | `connected` | Receive MQTT status (`'true'`/`'false'`) |
| `api_rx` | `number` | Receive API response |

---

## 7. Two Modes — Classic vs WebView

SoifGo supports two different ways of building applications:

### Classic Mode

- The user places native buttons and sliders on a page.
- Each button has a **behavior** (Send, Receive, Note, PDF, Image, Open_folder, Open Page, Reset, Browser or HTML File, plus Audio and Vibra menu items — see Section 13).
- Data reception can be **numeric** (with effects like rotation, color change, size change, chart display) or **string/text** (acts like a Label or Terminal).
- No HTML or JavaScript required.
- Best for simple "show one value" cases.

### WebView Mode

- Each button can host its own **WebView** (Online or Offline HTML).
- Full HTML/CSS/JavaScript control.
- Uses the `window.soifgo` bridge to talk to hardware.
- Best for custom dashboards, complex UIs, timers, charts, and combining multiple features (Bluetooth + MQTT + API + sensors) on one page.

### Classic API Method vs WebView API Method

| Aspect | Classic | WebView |
|---|---|---|
| Configuration | In SoifGo's button settings | In HTML/JS code |
| Parsing | SoifGo handles extraction (word start / word end) | You handle parsing in `api_rx` |
| Flexibility | Limited | Full control |
| Best for | Single value on a button | Dashboards, multiple values, complex logic |

---

## 8. API Response Formats (Important for Parsing)

Different API providers return their data in different shapes. When SoifGo extracts the value at the given `key`, it can arrive at `api_rx` in **two very different forms**:

### Format A — Plain value

The API returns a **flat JSON** where the key points directly to a primitive value.

**Example (DIA):**

```json
{
  "Symbol": "BTC",
  "Price": 86846.51694166221
}
```

**What `api_rx` receives:** `86846.51694166221` (just the raw value).

### Format B — Wrapped value

The API returns a **nested JSON** where the key points to another object.

**Example (CoinGecko):**

```json
{
  "bitcoin": {
    "usd": 86750
  }
}
```

**What `api_rx` receives:** `{usd=86750}` (the inner object, wrapped in B4A Map format).

### Robust Extractor (handles both)

```js
function extractValue(raw, fieldName) {
    const s = String(raw).trim();

    // 1. Plain number
    if (/^-?\d+(\.\d+)?$/.test(s)) return s;

    // 2. B4A Map format: {usd=86750}
    const mapMatch = s.match(new RegExp(fieldName + '[=:]\\s*([^,}\\s]+)', 'i'));
    if (mapMatch) return mapMatch[1];

    // 3. Valid JSON
    try {
        const obj = JSON.parse(s);
        if (obj[fieldName] !== undefined) return obj[fieldName];
    } catch (e) {}

    // 4. Fallback: any number
    const numMatch = s.match(/-?\d+(\.\d+)?/);
    return numMatch ? numMatch[0] : null;
}
```

### Rate Limits (Safe Intervals)

- **DIA:** ~ 5 seconds
- **CoinGecko:** ≥ 10 seconds
- **Binance:** ≥ 1 second (1200 req/min)
- **Coinbase:** ≥ 5 seconds
- **Blockchain.info:** ≥ 10 seconds

Always include a **Stop** button so the user can halt polling.

---

## 9. Known Limitations & Important Notes

### Bridge

- `window.soifgo` only exists inside SoifGo's WebView. In a normal browser it's `undefined`.
- Always guard with `if (window.soifgo) { ... }`.
- The second argument of `CallSub` is the `callUIThread` flag — always pass `true`.
- Maximum **3 arguments** after the boolean flag.
- Empty strings must still be passed as `''` — never omit them.

### Bluetooth

- SoifGo works with Bluetooth **data** devices (HC-05, HC-06, JDY-31, Arduino, ESP32, ESP8266), **not** audio devices (headphones, speakers).
- The device must be **paired in Android Settings first**. SoifGo's list is the same as the phone's Bluetooth list.
- After selecting a module once, it reconnects automatically next time. Long-press the Bluetooth icon to change the module.

### MQTT

- MQTT only works inside SoifGo's WebView.
- Two-step connect: `connecte_mqtt_ai` then (optionally) `connecte_mqtt_up`.
- `mqtt_publish` **auto-subscribes** you to the topic.
- `html_mqtt_status` receives the value as a **string** (`'true'`/`'false'`), not a boolean. Always compare with `=== 'true'`.

### API

- API only works inside SoifGo's WebView.
- `api_recive` requires **both** `address` and `key`. Missing the key silently fails.
- Response may be a plain value or a B4A Map string — handle both.
- Rate limits apply. Use safe intervals and always provide a Stop button.


### Sensors (WebView bridge)

- There are four receivers and **each one receives a single value as a string**: light (integer), move X (3 decimals), move Y (3 decimals), magneto (2 decimals).
- The magnetometer has **no components at all**. After `sensor_magno` is activated, `html_sensor_magno` delivers **one single value** (a string). Never destructure it into x/y/z, never use `data.x`, never expect a tuple, vector or object. Show it as-is, or use it for a threshold, graph or alarm.
- Accelerometer **Z** is **not forwarded**, and the magnetometer has no axes. A compass (heading) or a 3-axis spirit level cannot be built inside the WebView. A 2-axis tilt level using Move X / Move Y is possible.
- There is **no** `Connect_Phone_Sensor` Sub. `Connect Phone Sensor` is a Classic button behavior (Section 13.4). In WebView use `sensor_light`, `sensor_move`, `sensor_magno`.

### Microphone

- Microphone permission is required for audio, speech recognition, and voice-to-Bluetooth.
- `alert()`, `confirm()`, and `prompt()` all work natively inside SoifGo's WebView.

### Storage

- `localStorage` persists across page reloads and WebView restarts.
- Wrap `localStorage` calls in `try/catch` to handle quota errors.

### File Extensions

- Some file extensions are intentionally changed (e.g., JPG → PNG-like) to keep project files out of the phone gallery.
- SoifGo manages this internally. Users don't need to change anything manually.
- If a user wants to view an image in the gallery, they should swap the first two parts of the extension.

### Android Permissions

- The camera is **not** defined in the current version.
- The microphone is enabled only with user permission.
- If microphone permission is denied, sound metering, voice command, and speech-to-text features will not work.
## 10. FAQ for AI Assistants

**Q: Can SoifGo work without internet?**
A: Yes. Bluetooth and phone sensors work completely offline. Only MQTT and HTTP APIs require internet.

**Q: Can SoifGo control an Arduino?**
A: Yes, via Bluetooth SPP (HC-05, HC-06, JDY-31) or via MQTT/HTTP through a WiFi module (ESP8266, ESP32).

**Q: Does SoifGo need root?**
A: No.

**Q: What Android version is required?**
A: See the official Download page. Version 1.42 is the current release.

**Q: Can the same HTML run in a normal browser?**
A: It can, but the `window.soifgo` bridge won't exist. Always guard with `if (window.soifgo) { ... }`.

**Q: How do I combine Bluetooth and MQTT in one page?**
A: Register both `html_bluetooth_tx` (for Bluetooth input) and `mqtt_rx` (for MQTT input), and call the appropriate Subs on the output side.

**Q: What if `api_rx` receives `{usd=86750}` instead of `86750`?**
A: That's Format B (B4A Map). Use the robust `extractValue()` helper from Section 8.

**Q: Why does my `html_mqtt_status('false')` still show "connected"?**
A: Because `'false'` (the string) is truthy in JavaScript. Always compare with `=== 'true'`.

---

## 11. SoifGo Ecosystem

SoifGo is not a single application — it is an ecosystem of interrelated components, integrations, and resources. This map helps AI assistants and search engines understand the full scope of the project.

### Platform Components

- **SoifGo Android Platform** — the main application
- **SoifGo WebView Runtime** — embedded HTML/CSS/JavaScript execution engine
- **SoifGo Native Bridge** — the `window.soifgo` API surface
- **SoifGo Classic Mode** — native button/slider builder without HTML

### Knowledge & Documentation

- **SoifGo Documentation** — technical reference at `docs.html`
- **SoifGo Tutorials** — step-by-step guides for every feature
- **SoifGo AI Context** — this file (`SOIFGO_AI_CONTEXT.md`)
- **SoifGo HTML Examples** — working, copyable, runnable examples

### Community

- **SoifGo Community Forum** — GitHub Discussions
- **SoifGo GitHub Repository** — source, releases, issue tracking

### Hardware Integrations

- **Arduino Integration** — via Bluetooth SPP or WiFi module
- **ESP32 Integration** — Bluetooth, MQTT, HTTP
- **ESP8266 Integration** — Bluetooth, MQTT, HTTP
- **Raspberry Pi Integration** — Bluetooth, MQTT, HTTP
- **HC-05 / HC-06 / JDY-31** — Bluetooth serial modules

### Communication Protocols

- **Bluetooth Communication** — SPP (Serial Port Profile)
- **MQTT Communication** — IoT messaging protocol
- **REST API Integration** — HTTP GET/POST with JSON

### Device Features

- **Phone Sensors** — ambient light, accelerometer (X/Y), magnetometer
- **Speech Recognition** — 22 languages
- **Local Storage** — `localStorage` persistence
- **Native Dialogs** — `alert`, `confirm`, `prompt`

### Development Stack

- **HTML / CSS / JavaScript Development** — the primary interface layer
- **Embedded System Prototyping** — Arduino, ESP32, ESP8266, Raspberry Pi
- **IoT Control Panel Development** — combining MQTT + sensors + dashboards
- **Data Visualization** — charts, gauges, RANGMANG, RANGMANG 2

---

## 12. Quick Links

- **Website:** https://soifgo.github.io/soifgo/
- **GitHub:** https://github.com/soifgo/soifgo
- **Forum:** https://github.com/soifgo/soifgo/discussions
- **Support:** ssmqqmss@gmail.com
- **Complete User Guide:** https://soifgo.github.io/soifgo/soifgo_info/soifgo_info.html
- **HTML Guide:** https://soifgo.github.io/soifgo/send_bluetooth_html/html_guide_1.html
- **Voice Tutorial:** https://soifgo.github.io/soifgo/serial_voice/serial_voice_tutorials.html
- **Docs:** https://soifgo.github.io/soifgo/docs.html

---

## 13. SoifGo App Interface Guide (Screens, Menus, Behaviors)

Use this section to tell users **where to tap**. Use the exact English menu names shown here. Anything marked *Not covered* is not documented in this file — send the user to the Complete User Guide instead of guessing.

### 13.1 Two Screens: Edit and Play

- **Edit** is the design screen. Everything is created and configured here.
- **Play** is the live screen where the project actually runs (sending, receiving, WebView, effects).
- **SoifGo always opens in Play.** A new user sees an empty page and must go to Edit to build something.
- The **top-left icon** is the main menu and its first item always switches between the two modes:

| Screen | Top-left icon looks like | Menu items |
|---|---|---|
| Play | Play symbol | **Edit** (first), Language, Help ?, Update 1.42, Simulation Input Value ON/OFF |
| Edit | Pause symbol | **Play** (first), Select Design, Option, Undo, Redo (Undo and Redo are shown as **icons only**, no text) |

- Play top bar also shows the current page path (for example `soifgo/folder1/page/p1`) and the Bluetooth icon at the top right (long-press it to change the Bluetooth module).
- **Simulation Input Value** (Play menu) lets users test received-value effects without hardware.
- **Option** (Edit menu) currently only has two switches: *MENU Sounds* and *Screen Alive* (keep screen on). Minor; do not teach it unless asked.
- When an object (button/slider) is selected in Edit, the menu also shows: Copy Properties, Paste Properties, Delete Object, Background, Name, Size, Move, Behavior, Audio, Vibra — and **Effects** (last item, appears only after the button's behavior is set to a *Receive ... Value* option).

### 13.2 Select Design — Items Appear Step by Step

The *Select Design* list grows as the project grows (to avoid clutter):

1. At first only **folder** is listed. Create a folder.
2. After a folder exists, **Page** appears. Tapping it is not enough — the user must tap **Page** and create a **New Page**.
3. Once at least one page exists: **Background** (page background), **Button** (up to 40), **SeekBar** (up to 10) and **btnstartup** appear.
4. **Search Button** appears only if a button has been created; **Search SeekBar** only if a SeekBar has been created.

Structure: **folder → page → objects**. On one page, buttons, sliders and WebView buttons are **siblings**; any combination is allowed and none depends on another.

### 13.3 Beginner Workflow

1. Open SoifGo (Play) → top-left icon → **Edit**.
2. Create the folder, page and button exactly as described in **Section 0.2-A** (folder → Page → New Page → Button/SeekBar).
3. Select the object and configure it from the top-left menu (Behaviors: Section 0.2-B).
4. Top-left icon → **Play** to use it. Pair the Bluetooth module in Android Settings first, then tap the Bluetooth icon in SoifGo.

### 13.4 Button

A button is essentially a **label**: it can send, receive, show values, and run effects. It has more options than a slider.

**Behavior** (Edit → select button → menu → **Behavior**):
Reset · **Send** · **Receive** · **Browser or HTML File** · Image · Note · PDF · **Open_folder** · **Open Page** · **Bar+1** · **Bar-1** · **Bar Value** (the last three control a SeekBar from a button, see below). The list is headed by a non-selectable row titled **Select Behavior**.
**Audio** and **Vibra** are separate menu items (not behaviors).

**Send** (fixed text sent on every click): *Send Bluetooth*, *Send SMS*, *Send Server Api*, *Send Server MQTT*.

**Receive**:
*Receive Bluetooth Text*, *Receive Bluetooth Value*, *Receive Server Text Api*, *Receive Server Value Api*, *Receive Server Text MQTT*, *Receive Server Value MQTT*, *Connect Phone Sensor*.

- **Text** options show the received string on the button (label/terminal style). Their setup screen (for example *Receive Bluetooth Text*) has **Start Word** and **End Word** fields (the labels say "for Value") to filter incoming messages. If both are empty, **everything received is shown**. Use them when the sender sends several labelled values on the same line/stream (for example `temp23` and `low134`): a button whose Start Word is `temp` shows `23` and ignores `low134`; another button with Start Word `low` shows `134`. So one button per value, each with its own filter, is the pattern for pressure, temperature, etc. Text options have no Input MAX Value and no Effects (not confirmed).
- **Value** options treat the data as a number and unlock **Effects**.
- SMS is send-only. Sliders never receive; only buttons receive.
- *Connect Phone Sensor* works like *Receive ... Value*, but the data source is the **phone's own sensor**, not an external device (see below). It unlocks **Effects** too.

**Connect Phone Sensor setup screen** (titled *read_phone_sensor*): **Input MAX Value** (for example `100`), a **Sensor** selector (a *Select Effect* list: **Light**, **Motion X**, **Motion Y**, **Magnetic**), and **Show Value On/Off**. There are no Start/End words, because the value comes straight from the sensor. Some sensors give integers (Light) and some give decimals (Motion X/Y, Magnetic), so use **Math Formula** (for example `Math.round(val)`) or the Rotation/Size effects with a suitable Input MAX Value. Accelerometer Z is not available, and Magnetic is a single value with no components.

**Receive ... Value setup screen** (example: Receive Bluetooth Value):
- **Input MAX Value** — the maximum of the expected range (for example `100`).
- **Start Word for Value** — text just before the number (for example `temp=`).
- **End Word for Value** — text just after the number (for example `cg`).
- **Show Value On/Off** — show the number on the button or keep it hidden.
- Example: the microcontroller sends `temp=25cg`, Start Word is `temp=`, End Word is `cg`, Max is `100` → SoifGo reads `25`.

**Effects** (last menu item, only after a *Receive ... Value* behavior):
Reset · Size · Circular · Move · Rotation · Color · Graph · Math Formula · Alarm.
Effects can be **combined on one button**; each has its own settings. All Effects are described below; each also has a video on the website (https://soifgo.github.io/soifgo/Effect/effects.html). The website tutorial uses the names **Circle** (= Circular), **Rotate** (= Rotation), **Formula** (= Math Formula) and **ALARM** (= Alarm). If the user's screen shows other wording, follow the screen.

**Math Formula** — an internal script that pre-processes the received number before the other effects use it (useful when you cannot change what the sender transmits, for example to remove decimals or rescale so a dial turns correctly).
- The received number is named **`val`**.
- Allowed: `+ - * / %`, `Math.pow`, `Math.sqrt`, `Math.cbrt`, `Math.round`, `Math.floor`, `Math.ceil`, `Math.trunc`, `Math.fround`, `Math.abs`, `Math.sign`, `Math.PI`, `Math.E` (constants), `Math.sin`, `Math.cos`, `Math.tan`, `Math.log`, `Math.exp`, `Math.hypot`, `Math.max`, `Math.min`, `Math.clz32`, and the helpers `toRadians(val)` / `toDegrees(val)`.
- Examples: `Math.round(val)` · `val * 100 / 1023` · `val * 9 / 5 + 32` · `Math.pow(val, 3)` · `toRadians(val)`.
- `Math.PI` and `Math.E` are constants, not functions: write `val * Math.PI`, never `Math.PI(val)`. `Math.random()` takes no input.
- Apply **Math Formula first**, then the other effects.

**Gauge / needle recipe** (a button that turns like a dial):
1. Make the button thin (**Size**) and place it on a suitable page **Background** (a gauge face).
2. Give the button an image as its own **Background**. The button **rotates around its own center**, so draw the needle in the **top half** of the image and keep the bottom half transparent.
3. Set Behavior to a *Receive ... Value* option and fill Input MAX Value, Start Word, End Word.
4. Add **Math Formula** if the number needs fixing.
5. Add **Rotation** and set how many degrees the button turns between the minimum and maximum.

**Circular effect** (a ring / circular chart drawn behind the button — for round gauges, percentage rings, angle indicators). Available only after the button's Behavior is a *Receive ... Value* option or *Connect Phone Sensor* (it is an Effect).
- **Look:** a colored arc (ring) appears around/behind the button and follows the received value. The ring sticks out about **5% beyond the button's height**, so for a clean result:
  - make the button's **width equal to its height**, and
  - raise the button's **Corner** (**Background → Corner**, solid-color background only) a little until the button becomes a **circle**, **or** make the button itself invisible (transparent) so only the ring is seen.
- **First entry:** when the user opens the Circular settings, SoifGo first asks, based on the defined maximum (for example `360`), whether the circular slider is **one-sided** (`0` to `360`) or **two-sided** (positive values go to the **right**, negative values go to the **left**). Two-sided is for needs such as a centered dial.
- **Settings screen (as seen on screen):** four color sliders **R, G, B and A** (red, green, blue, alpha/transparency, each 0–255) with a color-picker area and a preview swatch, then **two sliders with `<` and `>` buttons** for fine steps:
  - the **upper** slider sets the **start angle** in degrees (range 0–360);
  - the **lower** slider sets the **opening (sweep) angle in degrees that the arc covers when the received value reaches the maximum**.
  - **Start angle direction (differs from the usual math convention; angles run clockwise):** `0` = **right**, `90` = **bottom**, `180` = **left**, `270` = **top**, `360` = back at the start (right).
  - **Opening example:** with **Input MAX Value** `1000` and the lower slider set to `30`, the arc opens **30 degrees** when the received value is `1000` (and proportionally less for smaller values).
  - So the **start and the extent of the arc are both adjustable**. While dragging, a small label at the top shows the two numbers (start angle and opening angle, for example `148  260`).
- Effects can be combined; use **Math Formula** first if the received number needs rescaling (see above).

**Testing effects without hardware (Simulator):**
- Set the button's Behavior to a numeric input (*Receive Bluetooth Value*, *Receive Server Value Api* or *Receive Server Value MQTT*) and set **Input MAX Value** to `1024`.
- In **Play**, open the top-left menu → **Simulation Input Value ON/OFF** → ON. SoifGo then feeds an internal counter from `1` to `1024`, so every effect can be tried live.
- When testing is finished, set the real hardware/server address.
- **Negative inputs are supported.** When setting the maximum, click the label and also enter the **negative maximum**. Example: an input range of `-20` to `100` → positive maximum `100`, negative maximum `20`.

**Size effect** — the button grows in size as the value rises (toward its configured maximum, in proportion to the value up to the input maximum).
- Two sliders: the **upper** sets how much the **width** grows toward the **right edge**; the **next** sets how much the **height** grows toward the **top**.
- For the largest visible change, place the button at the **far left and lowest** position of the page.
- Uses: vertical or horizontal level bars, temperature indicators, tank or fuel level, any growing quantity.

**Move effect** — the button moves as the value rises, toward the **far right** and the **top**.
- Two sliders: the **first** controls horizontal movement (right), the **second** vertical movement (up).
- Uses: thermometers, balancers, scales, tank level indicators.

**Rotation effect** — the button rotates up to **360°** at the maximum input.
- The **first** slider sets the **start position** (angle at input `0`); the **second** sets the **end rotation at the maximum input**.
- If a needle in the button's background cannot reach the wanted position, rotate the needle/background image itself (adjust its initial rotation after setting the background).
- Uses: clocks, pressure / temperature / current / voltage gauges, speedometers. See the gauge/needle recipe above.

**Color effect** — changes the button's color from preset schemes: **battery, cooling, brightness, red, green, blue, yellow**. Each preset has its own purpose: for example **battery** shows depletion, and **red** gets more intense from the minimum to the maximum input.

**Graph effect** — draws a **line graph** of the incoming values on the button.
- Settings: **line color** and **line thickness**.
- **Trigger** has four options: **phone/internal timing with saving**, **internal timing without saving**, **external trigger with saving**, **external trigger without saving**.
- With an **external trigger**, each received value is stored together with its **time**, so the sender must transmit at the right rhythm (for example every second or every hour); sending errors distort the recorded times.
- Two sliders at the bottom: the **first** sets the internal timing from **100 ms to 48 s**; the **second** sets the line thickness.
- Graphs are saved in the SoifGo folder (**SoifGo/graph**) and can be shared or moved. In Play the user can **zoom** and **browse history pages**.
- **New graph / new group on the same button:** rename the button in Edit; a new name starts fresh graphs. Renaming it back to the old name shows the earlier graphs again. Old graphs stay in **SoifGo/graph** under their names, even if the user forgets the name.

**Alarm effect** — shows a **text notification and plays a sound** when the value becomes **greater or less** than a threshold.
- **Alarm Value** — the numeric threshold.
- **Alarm Message** — the text shown when the alarm triggers.
- **Alarm Option** — choose **greater than** or **less than**.
- **Delay setting** — a delay bar at the bottom controls how often **consecutive alarms** can repeat.
- **Sound** — uses the same sound configured for the button (the **Audio** menu item).

**btnstartup** (older feature): runs selected buttons automatically in sequence when the app starts. Each selected button has a ticked checkbox and a delay; delays are consecutive. Example: buttons 4, 6, 8 with 2 s each → button 4 is clicked after 2 s, button 6 after 2 more seconds, button 8 after 2 more. Do not suggest it to beginners.

**Note** is a full feature (see 13.7). The remaining behaviors and menu items are short:

- **PDF** is a shortcut to a PDF archive kept in the project (an older built-in PDF viewer library was removed because it was heavy and buggy). Tapping the button opens the PDF in an **external app**; closing it returns to SoifGo.
- **Image** is a simple image viewer: the user picks a picture from the gallery once, SoifGo keeps it in its own internal archive, and tapping the button shows it instantly without going back to the gallery. Typical use: a project schematic (for example a 555 IC circuit) that the user wants to look at again and again.
- **Audio** (menu item, not a behavior): any button can play a sound when tapped. Its *Select Edit* list: **File Explorer** (pick a sound from the phone; it is copied into the project's Audio folder, e.g. `soifgo/folder1/Audio`, so it can be reused), **Sample** (built-in sounds: alarm1, ban, calc, error, key, meno, page, tik, wood — all mp3), **Saved** (choose from the project's Audio folder), **Just beeper** (plain beep) and **Reset**. It can play a song or any sound.
- **Vibra** (menu item): makes the phone vibrate when the button is pressed. The strength is adjusted with a small slider (with < and > arrows) that shows the current value, for example `Vibra53`.
- **Reset** clears (nulls) the button's last configured behavior.
- **Open Page** lists the other pages that exist (if any). The chosen page is **reloaded in Play and the previous page is closed**.
- **Open_folder** works the same way for folders: it reloads another existing folder.
- Together they let a user build a **menu network**: pages and folders linked by buttons, with the user moving between designs, buttons and screens (for example a main menu page whose buttons open the control page, the sensor page and so on).

### 13.5 SeekBar (Slider)

- A slider is a **sender only**. It outputs a number from 0 up to a configurable maximum (for example 100) as the user drags it.
- In Edit, dragging/tapping the slider opens its menu: **Send**, Background, Size, Delete, Move, Rotation, Color.
- Default send channel is **Bluetooth**. Choosing Send lets the user pick Bluetooth, API, MQTT or SMS; a settings window then appears automatically and guides the user.
- With nothing configured, the slider simply sends **the value itself**; the receiver decides whether it means light, speed, volume, etc.
- **Fine control from buttons:** when a slider has a large range (for example 10000), a finger cannot set an exact value. Add a button with Behavior **Bar+1** and another with **Bar-1**: after choosing the Behavior, a list of slider numbers appears; pick the slider. In Play, each tap moves that slider by **one unit**. A button with Behavior **Bar Value** can show the chosen slider's current value like a label. A common layout is a slider with a **`-`** button on its left and a **`+`** button on its right (Bar-1 and Bar+1).
- Optional **fixed word before** and/or **after** the value, so several sliders can be told apart (for example `speed=` + value).
- **Divide output** by 10, 100 or 1000 when the receiver expects decimals.
- Instead of the default off setting, an **RGB / White** option makes the slider configure three values and the output automatically, for a **single-strip** programmable LED (the **RANGMANG** module, version 1; sliders are optimized for it; its guide is on the website).

### 13.6 WebView (Browser or HTML File)

Behavior **Browser or HTML File** makes the button host a WebView. Every button has its own independent WebView. The `window.soifgo` bridge works in **both** modes below.

1. **Online** (on-screen label: **Open URL in Browser**) — works like a simple browser; the user enters a starting URL in the input row of the Behavior window (default `https://www.google.com/`).
2. **Offline** (on-screen label: **Open or Edit Local HTML File in WebView.Html**) — works like opening an HTML file in a browser. The choice can also be changed later from the `> Option <` bar of the Behavior window.

   There are **TWO SEPARATE things** you can do with an offline WebView:

   ── **A) DEFINE or REPLACE the source file (done in Edit)** ──
   - In **Edit**, select the button → top-left menu → **Behavior** →
     **Browser or HTML File** → **HTML file**.
   - At the end of this path, SoifGo shows the list of **reload options**:
     • Create the default **Hello SoifGo** page.
     • Pick an HTML file from the phone (**File Explorer**).
     • Use SoifGo's **sample files** (built-in examples).
     • Browse the project's **HTML files folder** to recall a page
       saved earlier in this project.
   - Pick one — the WebView is defined/reloaded with that file.
   - Editing happens on a copy, never on the original sample.

   ── **B) EDIT the code of the current page (done in Play)** ──
   - Go to **Play** → tap the **WebView button** → the WebView opens.
   - Inside the WebView, open its top-left menu → **Edit**.
     (No "Behavior" dialog appears here.)
   - The **code editor** opens. Its top-left menu contains:
     Rename HTML, Save As HTML, Find, Find & Replace, Pick a color,
     HexVisualizer ON/OFF, Text Size, Line Numbers, WrapLine,
     Add Send Function, and **Select All and Paste**.
   - Choose **Select All and Paste** — the clipboard replaces the whole file.
   - ⚠️ **Wait until the code changes from plain black to colored** (syntax highlighting finished) before closing.
   - Tap the **yellow X (close icon)** at the top to close and save.
     The WebView **reloads automatically** with the new code.
   - **Repeat this exact order every time you change the code.**

   **Important:** File loading (Explorer / samples / project folder)
   lives in **Edit**, at the end of the
   **Behavior → Browser or HTML File → HTML file** path.
   Manual editing and **Select All and Paste** live in **Play**.
   **Do NOT paste code in the Behavior screen.**


Editor top bar: Undo, Redo, and the yellow **X** (closes the editor and saves the HTML under the same name). Editor menu (top-left icon):
- **Rename HTML**, **Save As HTML**
- **Find**, **Find & Replace**
- **Pick a color** — choose a color; its hex code is copied to the clipboard.
- **HexVisualizer ON/OFF** — shows the color next to hex codes in the code.
- **Text Size**, **Line Numbers**, **WrapLine**
- **Add Send Function** — pick a bridge Sub from a list; the ready-made call is copied to the clipboard. Intended for developers. Entries include: Bluetooth Send, Receive Bluetooth Text, Receive : Phone Sensor : Light / Move X / Move Y / Magnetic, ON : Phone Sensor : Light / Move / Magnetic, Request Microphone Permission, MQTT Connect (address + id), MQTT Connect (username + password), MQTT Publish, MQTT Disconnect, MQTT Check Status, API Send, API Receive (Request), API Receive (Callback) (the list continues; further entries *not covered*).
- **Select All and Paste** — replaces the whole file with the clipboard. **This is how users apply AI-generated code**: copy your HTML, open the editor, choose Select All and Paste, tap X.

**Never tell a user to "open a file in a text editor on the phone".**
The built-in editor above is the intended path.

**Critical distinction for AI assistants:**
- **Edit** is for **defining** the WebView's source file
  (Behavior → Browser or HTML File → HTML file → reload list).
- **Play** is for **editing the code** of the current page
  (tap WebView button → WebView menu → Edit → editor menu →
   Select All and Paste → yellow X → auto-reload).
- Never mix the two. Pasting code only works inside the WebView's
  own editor, which is reached from **Play**.

### 13.7 Note

A **Note** is a text page owned by a button that can also **send its lines as commands** and **receive text into itself**. Like WebView, it is set up in Edit and opened in Play:

1. In Edit, select a button → **Behavior** → **Note**, then create a new note, pick one from the phone, or pick a saved one from SoifGo's Note folder.
2. In Play, tap the button to open the note.

**Note editor menu:** Rename Note, Save as Note, Color, Text Size, Left Mid Right (text alignment), **Note out**, Find, Find & Replace, Line Numbers, WrapLine, Font, **DateTime:Now** (inserts the current date and time — handy for reports and logs), **Gcod** (G-code designer, see below) and **RANGMANG2** (WS2812 pixel-sign designer, see below). The red X closes and saves.

**Note out** sets what the note does with data. It opens a *Select?* list: Reset · Bluetooth Send · Server Send Api · Server Send MQTT · Receive Bluetooth Text · Receive Server Text Api · Receive Server Text MQTT. Each channel (Bluetooth, API, MQTT) therefore has one send type and one receive type.

**Important distinction:** the note text contains only the **commands/messages**. Connection settings are **not** written in the note. For MQTT (and similar) the app asks for them in separate settings dialogs: *Address, topic, client id, user name, password, QOS*. Example: a note with 10 lines sends those 10 lines, one by one, using the saved settings.

**Sending lines:** after a send behavior is chosen, a green upload-arrow icon appears next to the Bluetooth icon. **Long-press** it to open *Select Behavior*: *Send Lines is Auto*, *Option: Bluetooth*, *Delay: Option*, *Loop OFF*. For Bluetooth sending the extra options are: delay between lines, repeating in a loop, waiting for a confirmation word from the device (for example `next`) before sending the next line, and a manual line-by-line mode with its own icon. Exact behavior of each option is not fully documented here (*Not covered*).

**Receiving (terminal / log style):** with a *Receive ... Text* behavior (Bluetooth, API or MQTT) the note works like a terminal. Each incoming message is stored in the note, and after each message the cursor moves to the next line (CRLF). The note therefore becomes a recorded log.

**Record and replay:** because received lines are saved as normal note text, the user can later switch the same note's behavior to a *Send* option and send those lines back. Example: a robot arm with 5 encoders sends its coordinates over Bluetooth → the note records them → the note is switched to Bluetooth Send → the arm repeats the same movements. The same idea fits a CNC machine or a production line. Suggest this pattern when a user wants to "record" and "repeat" device actions.

**Gcod (G-code designer, CNC):** the Note menu item **Gcod** opens a ready-made WebView app for designing and generating G-code. Toolbar: Shapes, Edit, Tools, **G-Code**, Move, Resize, Rotate, Pan, Properties, Undo, Redo, zoom out/in, Reset, and a select tool. It can draw most common shapes, add and edit text, and **reload an image and convert it to outline lines** for engraving or cutting. Workflow: design in Gcod → take the generated G-code (paste it into the note; Gcod also has its own paste option) → set Note out to **Bluetooth Send** → the lines are sent to the CNC controller. G-code written elsewhere can also be pasted or reloaded directly into a note and sent the same way. The **CMI209** project (see Section 2) is a microcontroller driver built to run a 3-axis CNC with this workflow.

**RANGMANG2 (WS2812 pixel-sign designer):** a ready-made web app that exists only inside the Note menu. It designs scrolling/animated pixel signs for WS2812 LEDs: a multi-channel setup (about 50 channels) used as an advertising sign. **Sliders are not compatible with RANGMANG2** (they are for RANGMANG v1, a single strip). Two tabs: **Image Converter** (set *Channels* and *Pixels/CH*, choose an image — it is added automatically as an animation frame — brightness, per-frame *Wait (ms)*) and **Pixel Editor** (paint on a pixel canvas, *Color*, *Eraser*, *Add Frame*, *Replace*, *Delete Frame*, *Generate*). *Generate* produces **hex commands** (12 characters per command, shown as a "Hex Output" list). The generated commands are in RANGMANG2's own special format and are sent to the controller through the note's send behavior (**Note out**, for example Bluetooth Send), exactly like G-code is sent to a CNC. Usage, build and schematics are on the website page.

**Modules (Gcod, RANGMANG, RANGMANG2, CMI209):** each has its own page on the website (links in Section 2) with usage instructions, build steps, a test video and schematics. Summarize in a sentence and **send the user to that page** instead of explaining the module from memory.

### 13.8 Not Covered Here (do not guess)

Exact behavior of each Note send option (delay, loop, wait-for-word, manual mode) and the end of the Add Send Function list. For these, point the user to https://soifgo.github.io/soifgo/soifgo_info/soifgo_info.html. (Effects are covered in 13.4; their videos are on the website Effects page.)

---

## 14. Complete Working Examples (copy these patterns)

All examples are self-contained single HTML files for the SoifGo WebView. Paste via **Play → WebView button → WebView menu → Edit → Select All and Paste → wait for colors → yellow X**.

| User wants | Start from |
|---|---|
| Send text/commands over Bluetooth | 14.1 |
| Show Bluetooth data / labelled values | 14.2 |
| Phone sensors (light, motion, magnetic) | 14.3 |
| Voice → Bluetooth | 14.4 |
| MQTT control panel | 14.5 |
| Bluetooth ↔ MQTT relay | 14.6 |
| REST API / prices, with Start/Stop | 14.7 |
| Save settings / lists | 14.8 |
| Arduino LED + sensor dashboard (HTML + sketch) | 14.9 |
| Measure AC current with the phone magnetometer | 14.10 |

### 14.1 Bluetooth — Send

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Send Command</title>
<style>
  body { font-family: sans-serif; background: #111; color: #eee; padding: 16px; text-align: center; }
  input, button { padding: 12px; font-size: 18px; border-radius: 8px; border: 0; margin: 6px; }
  button { background: #2196f3; color: #fff; }
</style>
</head>
<body>
  <h3>📤 Send to Bluetooth</h3>
  <input id="txt" placeholder="Enter text...">
  <button onclick="sendBT()">Send</button>
  <div id="msg"></div>

<script>
function setMsg(t) { document.getElementById('msg').textContent = t; }

function sendBT() {
  var t = document.getElementById('txt').value;
  if (window.soifgo) {
    window.soifgo.CallSub('html_bluetooth_rx', true, t);
    setMsg('Sent: ' + t);
  } else {
    setMsg('Not running inside SoifGo');
  }
}
</script>
</body>
</html>
```

### 14.2 Bluetooth — Receive (raw text + labelled values)

Use when the device sends text such as `temp=23` or `A0=512`. Each chunk is scanned for `name=number` pairs.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>BT Receive</title>
<style>
  body { font-family: sans-serif; background: #111; color: #eee; padding: 16px; }
  .box { background: #222; border-radius: 10px; padding: 14px; margin: 8px 0; font-size: 20px; }
  #raw { font-family: monospace; font-size: 14px; word-break: break-all; min-height: 40px; }
</style>
</head>
<body>
  <div class="box">Raw: <div id="raw">waiting for data...</div></div>
  <div class="box" id="values">No values yet</div>

<script>
var latest = {};

function html_bluetooth_tx(data) {
  var s = String(data);
  document.getElementById('raw').textContent = s;

  var re = /([A-Za-z_]\w*)\s*=\s*(-?\d+(?:\.\d+)?)/g, m;
  while ((m = re.exec(s)) !== null) {
    latest[m[1]] = parseFloat(m[2]);
  }
  var out = [];
  for (var k in latest) { out.push(k + ' = ' + latest[k]); }
  if (out.length) document.getElementById('values').innerHTML = out.join('<br>');
}
window.html_bluetooth_tx = html_bluetooth_tx;
</script>
</body>
</html>
```

### 14.3 Phone Sensors (all three activated)

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Phone Sensors</title>
<style>
  body { font-family: sans-serif; background: #111; color: #eee; padding: 16px; }
  .box { background: #222; border-radius: 10px; padding: 14px; margin: 8px 0; font-size: 22px; }
  #info { opacity: .7; font-size: 14px; }
</style>
</head>
<body>
  <div class="box" id="light">Light: waiting...</div>
  <div class="box" id="movex">Move X: waiting...</div>
  <div class="box" id="movey">Move Y: waiting...</div>
  <div class="box" id="magno">Magneto: waiting...</div>
  <div id="info"></div>

<script>
// Each receiver gets ONE value as a STRING.
function html_sensor_light(data) { document.getElementById('light').textContent = 'Light: ' + data; }
function html_sensor_movex(data) { document.getElementById('movex').textContent = 'Move X: ' + data; }
function html_sensor_movey(data) { document.getElementById('movey').textContent = 'Move Y: ' + data; }
function html_sensor_magno(data) { document.getElementById('magno').textContent = 'Magneto: ' + data; }

window.html_sensor_light = html_sensor_light;
window.html_sensor_movex = html_sensor_movex;
window.html_sensor_movey = html_sensor_movey;
window.html_sensor_magno = html_sensor_magno;

window.onload = function () {
  if (window.soifgo) {
    // Call ALL THREE to activate the sensors.
    window.soifgo.CallSub('sensor_light', true);
    window.soifgo.CallSub('sensor_move', true);
    window.soifgo.CallSub('sensor_magno', true);
  } else {
    document.getElementById('info').textContent = 'Not running inside SoifGo';
  }
};
</script>
</body>
</html>
```

To use a value numerically: `var v = parseFloat(data);` (values arrive as strings).

### 14.4 Voice → Bluetooth

Speech recognition availability depends on the device. For the full 22-language tutorial see https://soifgo.github.io/soifgo/serial_voice/serial_voice_tutorials.html

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Voice to Bluetooth</title>
<style>
  body { font-family: sans-serif; background: #111; color: #eee; padding: 16px; text-align: center; }
  button { padding: 16px 28px; font-size: 20px; border-radius: 12px; border: 0; background: #e91e63; color: #fff; }
  #out { margin-top: 16px; font-size: 20px; }
</style>
</head>
<body>
  <button id="micBtn">🎤 Start</button>
  <div id="out">Say something...</div>

<script>
var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
var rec = SR ? new SR() : null;
if (rec) rec.lang = 'en-US';   // change the language code as needed

window.onload = function () {
  if (window.soifgo) { window.soifgo.CallSub('request_mic_perm', true, null); }
};

document.getElementById('micBtn').addEventListener('click', function () {
  if (!rec) { document.getElementById('out').textContent = 'Speech recognition not available'; return; }
  rec.start();
});

if (rec) {
  rec.onresult = function (e) {
    var text = e.results[0][0].transcript;
    document.getElementById('out').textContent = text;
    if (text.trim() && window.soifgo) {
      window.soifgo.CallSub('html_bluetooth_rx', true, text);
    }
  };
  rec.onerror = function (e) { document.getElementById('out').textContent = 'Error: ' + e.error; };
}
</script>
</body>
</html>
```

### 14.5 MQTT Control Panel (connect, publish, receive, status)

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>MQTT Control</title>
<style>
  body { font-family: sans-serif; background: #1e1e1e; color: #e0e0e0; padding: 16px; }
  input, button { padding: 10px; border-radius: 6px; border: 1px solid #444; background: #2b2b2b;
                  color: #fff; font-size: 16px; margin: 4px 0; width: 100%; box-sizing: border-box; }
  button { background: #9b59b6; border: 0; font-weight: 600; }
  button.on { background: #27ae60; } button.off { background: #c0392b; } button.chk { background: #f39c12; color: #111; }
  .row { display: flex; gap: 8px; } .row button { flex: 1; }
  .status { padding: 10px; border-radius: 6px; margin: 10px 0; font-weight: 600; }
  .status.connected { background: #1a2a1a; color: #4caf50; border: 1px solid #4caf50; }
  .status.disconnected { background: #2a1a1a; color: #e74c3c; border: 1px solid #e74c3c; }
  #log { background: #111; padding: 10px; border-radius: 8px; height: 200px; overflow-y: auto;
         font-family: monospace; font-size: 13px; margin-top: 10px; }
  label { font-size: 12px; color: #888; display: block; margin-top: 6px; }
</style>
</head>
<body>
  <h3>🟣 MQTT Control Panel</h3>
  <label>Broker URL</label><input id="broker" value="tcp://test.mosquitto.org:1883">
  <label>Client ID (empty = auto)</label><input id="cid" placeholder="myTest_001">
  <label>Username (optional)</label><input id="user">
  <label>Password (optional)</label><input id="pass" type="password">
  <label>QoS (0, 1, 2)</label><input id="qos" value="0">

  <div class="row">
    <button onclick="doConnect()">Connect</button>
    <button class="chk" onclick="doStatus()">Check</button>
    <button onclick="doDisconnect()">Disconnect</button>
  </div>
  <div id="status" class="status disconnected">Disconnected</div>

  <label>Topic</label><input id="topic" value="soifgo/demo/tx">
  <label>Message</label><input id="msg" value="ON">
  <div class="row">
    <button class="on" onclick="pub('ON')">Publish ON</button>
    <button class="off" onclick="pub('OFF')">Publish OFF</button>
  </div>
  <button onclick="pub()">Send custom message</button>
  <div id="log"></div>

<script>
function log(t) {
  var el = document.getElementById('log');
  el.innerHTML += '<div>[' + new Date().toLocaleTimeString() + '] ' + t + '</div>';
  el.scrollTop = el.scrollHeight;
}
function setStatus(ok) {
  var el = document.getElementById('status');
  el.className = 'status ' + (ok ? 'connected' : 'disconnected');
  el.textContent = ok ? 'Connected' : 'Disconnected';
}
function noBridge() { log('Not running inside SoifGo'); }

function doConnect() {
  if (!window.soifgo) return noBridge();
  var broker = document.getElementById('broker').value.trim();
  var cid = document.getElementById('cid').value.trim();
  var user = document.getElementById('user').value.trim();
  var pass = document.getElementById('pass').value;
  log('Connect -> ' + broker);
  window.soifgo.CallSub('connecte_mqtt_ai', true, broker, cid);      // step 1
  if (user || pass) {
    window.soifgo.CallSub('connecte_mqtt_up', true, user, pass);     // step 2 (optional)
  }
}
function doDisconnect() {
  if (!window.soifgo) return noBridge();
  window.soifgo.CallSub('mqtt_Disconnect', true);
  setStatus(false);
}
function doStatus() {
  if (!window.soifgo) return noBridge();
  window.soifgo.CallSub('mqtt_status', true);
}
function pub(preset) {
  if (!window.soifgo) return noBridge();
  var topic = document.getElementById('topic').value.trim();
  var qos = document.getElementById('qos').value.trim() || '0';
  var text = (preset !== undefined) ? preset : document.getElementById('msg').value;
  if (!topic) { alert('Enter a topic'); return; }
  log('TX ' + topic + ' : ' + text);
  window.soifgo.CallSub('mqtt_publish', true, topic, text, qos);     // also auto-subscribes
}

function mqtt_rx(topic, message) { log('RX ' + topic + ' : ' + message); }
window.mqtt_rx = mqtt_rx;

function html_mqtt_status(connected) {
  var ok = (connected === true || connected === 'true');   // arrives as a STRING
  setStatus(ok);
  log('Status: ' + (ok ? 'CONNECTED' : 'DISCONNECTED'));
}
window.html_mqtt_status = html_mqtt_status;
</script>
</body>
</html>
```

### 14.6 Bluetooth ↔ MQTT Relay (JS part)

```javascript
// Bluetooth -> MQTT   (connect MQTT first, as in 14.5)
function html_bluetooth_tx(data) {
  if (window.soifgo) window.soifgo.CallSub('mqtt_publish', true, 'soifgo/relay/from_bt', String(data), '0');
}
window.html_bluetooth_tx = html_bluetooth_tx;

// MQTT -> Bluetooth
function mqtt_rx(topic, message) {
  if (window.soifgo) window.soifgo.CallSub('html_bluetooth_rx', true, message);
}
window.mqtt_rx = mqtt_rx;
```

### 14.7 API — Price with Start / Stop

Works with both response formats (plain value and B4A Map). To switch provider change `API_URL`, `API_KEY`, `FIELD`, `INTERVAL`.

| Provider | `API_URL` | `API_KEY` | `FIELD` | `INTERVAL` |
|---|---|---|---|---|
| DIA (flat JSON) | `https://api.diadata.org/v1/assetQuotation/Bitcoin/0x0000000000000000000000000000000000000000` | `Price` | `Price` | 5000 |
| CoinGecko (nested) | `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd` | `bitcoin` | `usd` | 10000 or more |

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>BTC Price</title>
<style>
  body { font-family: sans-serif; background: #1e1e1e; color: #e0e0e0; padding: 20px; text-align: center; }
  h2, .price { color: #f7931a; }
  .price { font-size: 2.5rem; font-weight: bold; margin: 20px 0; min-height: 3rem; }
  button { background: #f7931a; color: #fff; border: 0; padding: 14px 30px; border-radius: 8px; font-size: 16px; margin: 6px; }
  button.stop { background: #c0392b; }
  #raw { background: #111; padding: 10px; border-radius: 8px; font-family: monospace; font-size: 12px;
         text-align: left; word-break: break-all; max-height: 120px; overflow-y: auto; margin-top: 12px; }
  #state { font-size: 14px; color: #888; }
</style>
</head>
<body>
  <h2>₿ Bitcoin Price</h2>
  <div class="price" id="price">--</div>
  <div id="state">Stopped</div>
  <div>
    <button onclick="startPoll()">▶ Start</button>
    <button class="stop" onclick="stopPoll()">■ Stop</button>
  </div>
  <div id="raw"></div>

<script>
var API_URL  = 'https://api.diadata.org/v1/assetQuotation/Bitcoin/0x0000000000000000000000000000000000000000';
var API_KEY  = 'Price';   // key SoifGo extracts (REQUIRED)
var FIELD    = 'Price';   // field used by extractValue
var INTERVAL = 5000;      // ms, respect rate limits (Section 8)
var timer = null;

function startPoll() {
  stopPoll();
  fetchNow();
  timer = setInterval(fetchNow, INTERVAL);
  document.getElementById('state').textContent = 'Live, every ' + (INTERVAL / 1000) + 's';
}
function stopPoll() {
  if (timer) { clearInterval(timer); timer = null; }
  document.getElementById('state').textContent = 'Stopped';
}
function fetchNow() {
  if (window.soifgo) {
    window.soifgo.CallSub('api_recive', true, API_URL, API_KEY);
  } else {
    document.getElementById('state').textContent = 'Not running inside SoifGo';
    stopPoll();
  }
}

function extractValue(raw, fieldName) {
  var s = String(raw).trim();
  if (/^-?\d+(\.\d+)?$/.test(s)) return s;                                   // plain number
  var m = s.match(new RegExp(fieldName + '[=:]\\s*([^,}\\s]+)', 'i'));       // {usd=86750}
  if (m) return m[1];
  try { var o = JSON.parse(s); if (o[fieldName] !== undefined) return o[fieldName]; } catch (e) {}
  var n = s.match(/-?\d+(\.\d+)?/);                                          // fallback
  return n ? n[0] : null;
}

function api_rx(number) {
  document.getElementById('raw').textContent = String(number);
  var v = parseFloat(extractValue(number, FIELD));
  document.getElementById('price').textContent = isNaN(v)
    ? 'Parse error'
    : '$' + v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
window.api_rx = api_rx;
</script>
</body>
</html>
```

To send data to a server (POST `{"key":"value"}`): `window.soifgo.CallSub('api_send', true, address, key, value);`

### 14.8 Save & Reload (localStorage)

`alert()`, `confirm()`, `prompt()` work natively. Always use try/catch around storage and escape user text before putting it in `innerHTML`.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Save & Reload</title>
<style>
  body { font-family: sans-serif; background: #1e1e1e; color: #e0e0e0; padding: 16px; }
  input, button { padding: 10px; border-radius: 6px; border: 1px solid #444; background: #2b2b2b; color: #fff; font-size: 16px; }
  button { background: #3498db; border: 0; } button.danger { background: #c0392b; }
  .item { padding: 8px 12px; background: #2b2b2b; border-radius: 6px; margin: 4px 0; display: flex; justify-content: space-between; align-items: center; }
</style>
</head>
<body>
  <h3>💾 Save & Reload</h3>
  <input id="name" placeholder="Enter name...">
  <button onclick="addItem()">Save</button>
  <button class="danger" onclick="clearAll()">Clear</button>
  <div id="out"></div>

<script>
var KEY = 'my_data';   // use a unique key per page

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; }
  catch (e) { return []; }
}
function persist(list) {
  try { localStorage.setItem(KEY, JSON.stringify(list)); }
  catch (e) { alert('Could not save. Storage may be full.'); }
}
function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function render() {
  var list = load(), out = document.getElementById('out');
  if (!list.length) { out.innerHTML = '<p style="color:#888">No items saved yet.</p>'; return; }
  out.innerHTML = list.map(function (x, i) {
    return '<div class="item"><span>' + (i + 1) + '. ' + esc(x.name) + '</span>' +
           '<button class="danger" onclick="removeItem(' + i + ')">×</button></div>';
  }).join('');
}
function addItem() {
  var n = document.getElementById('name').value.trim();
  if (!n) { alert('Please enter a name.'); return; }
  var list = load(); list.push({ name: n, time: Date.now() });
  persist(list); render();
  document.getElementById('name').value = '';
}
function removeItem(i) { var l = load(); l.splice(i, 1); persist(l); render(); }
function clearAll() {
  if (!confirm('Delete all saved items?')) return;
  try { localStorage.removeItem(KEY); } catch (e) {}
  render();
}
window.onload = render;
</script>
</body>
</html>
```

### 14.9 Arduino + Bluetooth Dashboard (LED control + sensor readout)

**Protocol (both sides must match):**
- Baud rate: **9600** (HC-05 / HC-06 default data mode).
- Phone → Arduino: `ON` or `OFF`, each ending with a newline (`\n`). The sketch ignores empty lines, so it works whether or not SoifGo appends its own line ending.
- Arduino → phone: `A0=<number>` followed by a newline, every 500 ms.

**Wiring (Arduino Uno + HC-05):** HC-05 TX → pin 10, HC-05 RX → pin 11 (through a voltage divider, 5 V → 3.3 V), VCC 5 V, GND common. Pair the module in Android Settings first (default PIN is usually `1234` or `0000`).

**Arduino sketch:**

```cpp
#include <SoftwareSerial.h>

SoftwareSerial bt(10, 11);   // RX, TX
const int LED_PIN = 13;
String line = "";
unsigned long lastSend = 0;

void setup() {
  pinMode(LED_PIN, OUTPUT);
  bt.begin(9600);
}

void handleCommand(String cmd) {
  cmd.trim();
  if (cmd.length() == 0) return;          // ignore empty lines
  if (cmd == "ON")  digitalWrite(LED_PIN, HIGH);
  if (cmd == "OFF") digitalWrite(LED_PIN, LOW);
}

void loop() {
  while (bt.available()) {
    char c = bt.read();
    if (c == '\n' || c == '\r') { handleCommand(line); line = ""; }
    else line += c;
  }
  if (millis() - lastSend >= 500) {
    lastSend = millis();
    bt.print("A0=");
    bt.println(analogRead(A0));
  }
}
```

**ESP32 variant:** replace the SoftwareSerial parts with `#include "BluetoothSerial.h"`, `BluetoothSerial bt;`, `bt.begin("ESP32_SoifGo");` and use the same `bt.available() / bt.read() / bt.print` calls. Pair "ESP32_SoifGo" in Android Settings.

**HTML page:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Arduino Dashboard</title>
<style>
  body { font-family: sans-serif; background: #111; color: #eee; padding: 16px; text-align: center; }
  button { padding: 16px 28px; font-size: 20px; margin: 6px; border-radius: 12px; border: 0; color: #fff; }
  .on { background: #27ae60; } .off { background: #c0392b; }
  .box { background: #222; border-radius: 10px; padding: 14px; margin: 12px 0; font-size: 28px; }
  #bar { height: 14px; background: #333; border-radius: 7px; overflow: hidden; }
  #fill { height: 100%; width: 0; background: #2196f3; }
  #info { opacity: .7; font-size: 14px; }
</style>
</head>
<body>
  <h3>Arduino Dashboard</h3>
  <button class="on" onclick="send('ON')">LED ON</button>
  <button class="off" onclick="send('OFF')">LED OFF</button>
  <div class="box">A0: <span id="a0">--</span><div id="bar"><div id="fill"></div></div></div>
  <div id="info">Waiting...</div>

<script>
function send(cmd) {
  if (window.soifgo) {
    window.soifgo.CallSub('html_bluetooth_rx', true, cmd + '\n');
    document.getElementById('info').textContent = 'Sent: ' + cmd;
  } else {
    document.getElementById('info').textContent = 'Not running inside SoifGo';
  }
}

function html_bluetooth_tx(data) {
  var re = /A0\s*=\s*(\d+)/g, m, last = null;
  while ((m = re.exec(String(data))) !== null) { last = parseInt(m[1], 10); }
  if (last !== null) {
    document.getElementById('a0').textContent = last;
    document.getElementById('fill').style.width = Math.min(100, last * 100 / 1023) + '%';
  }
}
window.html_bluetooth_tx = html_bluetooth_tx;
</script>
</body>
</html>
```

---

### 14.10 AC Clamp Meter (Phone Magnetometer)

Uses the phone's **magnetic sensor** as a free AC clamp meter — no extra
hardware, no external clamp, no soldering. The magnetometer picks up the
alternating magnetic field around a mains wire and turns it into a current
reading, live on screen.

**How it works (5 steps):**

1. **Decimal → integer.** Multiply the raw magnetometer value by `10`
   (`raw = parseFloat(data) * 10`) to get a better numeric sample.
2. **Take 50 samples.** Fill a rolling buffer with the last 50 readings of
   the alternating field.
3. **Find the peak.** Track the highest and the lowest value in the buffer
   (after removing the zero-offset).
4. **Peak-to-peak.** `peak = max − min` — the field's amplitude.
5. **Divide by calibration.** `current = peak / calFactor` — the result is
   the current in Amperes.

**Calibration (`calFactor`):** the default `420` is an **experimental value**
measured by the author on his own phone at **1 Ampere**. Every phone will
give a different number. Calibrate with a known load (for example a 1 kW
heater ≈ 4.35 A at 230 V), compare with a reference ammeter, and adjust the
**CAL FACTOR** field in the app until the reading matches.

**Bridge usage:** the page needs only **one** receiver
(`html_sensor_magno`) — but all **three** activation Subs must still be
called, per Section 0.4 rule 7:

```js
function html_sensor_magno(data) {
  var raw = parseFloat(data) * 10;          // decimal -> integer
  // buffer.push(raw)
  // peak-to-peak over the buffer
  // currentA = peak / calFactor
  // update the display
}
window.html_sensor_magno = html_sensor_magno;

window.onload = function () {
  if (window.soifgo) {
    // Call ALL THREE (Section 0.4 rule 7)
    window.soifgo.CallSub('sensor_light', true);
    window.soifgo.CallSub('sensor_move', true);
    window.soifgo.CallSub('sensor_magno', true);
  }
};
```

---

## 15. Troubleshooting Table

| Symptom | Likely cause | Fix |
|---|---|---|
| Nothing happens when a button is tapped | Page opened in a normal browser, or bridge not guarded | `window.soifgo` only exists inside SoifGo. Use `if (window.soifgo)` |
| Receiver never fires | Not registered on `window` | `window.myReceiver = myReceiver;` |
| Sensors show nothing | Not all three activation Subs called, or not called in `window.onload` | Call `sensor_light`, `sensor_move`, `sensor_magno` in `window.onload` (14.3) |
| Code works for light/move but magnetic looks wrong | Code expects x/y/z | Magneto is a single string value; use `parseFloat(data)` |
| `CallSub` does nothing | Second argument is not `true`, empty arg omitted, or more than 3 args | Pass `true`, use `''` for empty args, max 3 args |
| MQTT shows "Connected" when it is not | `'false'` string is truthy | Compare `=== 'true'` |
| MQTT messages never arrive | Never published/subscribed to that topic, or topic case differs | Publish once to the topic (auto-subscribes); topics are case-sensitive |
| `api_recive` silently fails | Missing `key` | Pass both `address` and `key` |
| `api_rx` shows `{usd=86750}` or fails `JSON.parse` | B4A Map format | Use `extractValue()` (14.7) |
| HTTP 429 from an API | Polling too fast | Increase interval (Section 8), keep a Stop button |
| Pasted code vanished | Editor closed before highlighting finished, or pasted in the Behavior screen | Wait until code turns colored, then yellow X. Paste only in the WebView editor from **Play** |
| A button or slider disappeared / is not visible | Pushed behind another object (Match with the other button), or Background transparent and Name empty | Edit → Select Design → **Search Button** (or **Search SeekBar**), drag the slider until the lost object blinks red, then change its **Name** or **Background**. Or tap **Undo** (history is lost if the app was closed). See 0.2-A |
| Bluetooth list is empty | Module not paired | Pair in Android Settings first |
| Headphones/speaker not usable | SoifGo supports data devices only | Use HC-05, HC-06, JDY-31, ESP32, etc. |
| Microphone features fail | Permission denied | Call `request_mic_perm`, or enable the Microphone permission in Android Settings → Apps → SoifGo |
| Arduino ignores commands | Baud/protocol mismatch | Use the same baud rate and the exact `ON` / `OFF` + newline protocol (14.9) |

---

**End of SOIFGO_AI_CONTEXT.md**
