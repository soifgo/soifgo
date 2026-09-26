\# SoifGo AI Context



\*\*Purpose:\*\* AI-readable reference for the SoifGo Android app. When a user asks about SoifGo, load this file first.



\*\*Official guide:\*\* https://soifgo.github.io/soifgo/tutorials/send\_bluetooth\_html/html\_guide\_1.html



\*\*Microphone guide:\*\* https://soifgo.github.io/soifgo/tutorials/serial\_voice/serial\_voice\_tutorials.html



\*\*SoifGo version:\*\* 1.41 (VersionCode 141)



\*\*Platform:\*\* Android (built with B4A / Basic4Android)



\---



\## 1. What is SoifGo



SoifGo is an Android app that runs HTML pages inside a WebView. It injects a JavaScript object called `window.soifgo` that lets HTML pages call native Android functions.



With plain HTML, CSS, and JavaScript, you can access:



\- Bluetooth serial (send and receive)

\- Phone sensors (light, accelerometer X and Y, magnetometer Z)

\- Microphone and speech recognition

\- MQTT client (built-in)

\- HTTP API client

\- localStorage

\- Native Android dialogs



No Android Studio, no Java, no Kotlin required.



\---



\## 2. The Bridge — `window.soifgo.CallSub`



Every call from JavaScript to SoifGo follows this exact pattern:



```javascript

window.soifgo.CallSub('subName', true, arg1, arg2, arg3);

