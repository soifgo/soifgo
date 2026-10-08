# SoifGo — Android IoT & Hardware Controller (B4A, WebView, Bluetooth, MQTT, API)

**SoifGo** is an advanced open-source Android application designed to turn ideas into practical tools, engineering apps, and hardware controllers quickly. Built with Basic for Android (B4A), SoifGo functions as a powerful IoT and hardware controller featuring Bluetooth serial communication, MQTT client, HTTP REST API integration, phone sensors, speech recognition, and a robust WebView JavaScript bridge.

- **Official Website:** [https://soifgo.github.io/soifgo/](https://soifgo.github.io/soifgo/)
- **Complete User Guide:** [soifgo_info](https://soifgo.github.io/soifgo/soifgo_info/soifgo_info.html)
- **Developer Documentation:** [Docs & API Reference](https://soifgo.github.io/soifgo/docs.html)
- **AI Context Reference:** [SOIFGO_AI_CONTEXT.md](SOIFGO_AI_CONTEXT.md)
- **Community Forum:** [GitHub Discussions](https://github.com/soifgo/soifgo/discussions)

---

## Key Features

- **WebView & JavaScript Bridge (`window.soifgo`):** Host custom HTML applications and dashboards inside independent button WebViews with full two-way communication to native Android features and external hardware.
- **Bluetooth Serial (SPP):** Bi-directional communication with microcontrollers like Arduino, ESP32, ESP8266, HC-05, HC-06, and JDY-31.
- **IoT & Networking:** Built-in MQTT messaging client and HTTP API GET/POST fetcher with JSON extraction handlers.
- **Phone Sensors:** Real-time data streams from ambient light, motion/accelerometer (X/Y axes), and magnetometers.
- **Voice & Speech:** Microphone integration with speech-to-text supporting 22 languages.
- **Classic Mode:** Native buttons and sliders with flexible behaviors, data filtering, and rich graphical effects (rotation, size change, color shifts, and charts) without writing HTML.
- **Specialized Modules:** Built-in tools for CNC machine control (G-code via **CMI209** and **Gcod** module) and WS2812/WS2811 pixel LED sign design (**RANGMANG** and **RANGMANG2**).

---

## App Workflow

SoifGo projects follow a clean hierarchical structure:  
`Folder` ➡️ `Page` ➡️ `Elements (Buttons, Sliders, WebViews, Notes)`

- **Edit Mode:** Create folders, pages, add controls, configure behaviors, and assign HTML/WebView templates.
- **Play Mode:** Live runtime environment to interact with controls, connect to Bluetooth/MQTT, run custom WebViews, and monitor real-time sensor data or visual effects.

---

## Quick WebView Example

```javascript
// Sending text over Bluetooth from WebView
if (window.soifgo) {
    window.soifgo.CallSub('html_bluetooth_rx', true, 'ON');
}

// Receiving data from Bluetooth
function html_bluetooth_tx(data) {
    console.log('Received:', data);
}
window.html_bluetooth_tx = html_bluetooth_tx;