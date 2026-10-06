# SoifGo AI Complete Context & Documentation Map

**Purpose:** Comprehensive AI-readable reference for the SoifGo Android application and its official website resources. When a user asks about SoifGo, this file serves as the primary source of truth for all documentation, tutorials, native bridges, and ecosystem components.

**SoifGo Version:** 1.42 (VersionCode 142)
**Platform:** Android (built with B4A / Basic4Android)
**Official Website:** https://soifgo.github.io/soifgo/
**GitHub:** https://github.com/soifgo/soifgo
**Forum:** https://github.com/soifgo/soifgo/discussions
**Support:** ssmqqmss@gmail.com

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
- **RANGMANG 2 (2D plotting):** https://soifgo.github.io/soifgo/rangmang2/rangmang2.html
- **CMI209 (IoT project example):** https://soifgo.github.io/soifgo/cmi209/cmi209.html

### Working Examples (HTML + Bluetooth + Arduino)

- **HTML Guide + 4 Examples:** https://soifgo.github.io/soifgo/send_bluetooth_html/html_guide_1.html
  - LED Blink
  - Sensor Readout
  - Speed Control
  - Phone Sensors
## 3. The Bridge Architecture — `window.soifgo.CallSub`

Communication from local or remote web scripts back to the native B4A environment relies on a standardized syntax:

```javascript
window.soifgo.CallSub('subName', true, arg1, arg2, arg3);
```

### Rules

- The first argument is the **Sub name** (string).
- The second argument is always a **boolean** (`true` or `false`).
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

> **Note:** Call all three to activate all sensors. Typically called inside `window.onload`.

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
#### `html_sensor_magno(data)` — magnetic sensor value

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
- Each button has a **behavior** (Send, Receive, Note, PDF, Image, Open X, Reload, WebView, Sound, Click, Vibration).
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
- The second argument of `CallSub` is always a boolean (`true`/`false`).
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
A: See the official Download page. Version 1.41 is the current release.

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

**End of SOIFGO_AI_CONTEXT.md**