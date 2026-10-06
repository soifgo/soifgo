# SoifGo Guide

## Introduction

**SoifGo** is an Android application designed to turn ideas into tools and practical apps quickly. Users can build screens without heavy coding, add buttons and sliders, define behaviors for them, and use features such as Bluetooth, MQTT, API, microphone, and data storage.

The name **SoifGo** comes from the French word *Soif* (thirst) and the English word *Go* (to go).

SoifGo is suitable for many use cases, including:

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

Each screen can hold multiple Web Applications, and they can be archived inside the project.

## Main App Structure

SoifGo has two main screens:

- **Edit:** for creating and editing projects, folders, pages, buttons, sliders, backgrounds, and behaviors.
- **Play:** for running the project and using pages, buttons, Bluetooth connection, simulation, and other features.

In the top-left corner, there is the **Edit** menu icon. This menu shows options related to the current section.

The project structure is tree-based:

    Folder
    └── Page
        ├── Buttons
        ├── Sliders
        ├── WebView
        └── Other page elements

## Creating a Folder and a Page

To start a project:

1. Enter the **Edit** screen.
2. From the Edit menu, choose **Select Design**.
3. First, create a main folder or rename the default folder.
4. Inside the folder, create a new page using **New Page**.
5. Choose a name for the page.
6. After creating the page, you can add buttons, sliders, and a background.

For example, you can create a folder named "IoT" and add pages such as:

- Main Menu;
- Kitchen;
- Garage;
- Workshop.

Default names exist for folders and pages, but the user can rename them.

## Select Design

In the **Select Design** section, several tools are available for building a page, including:

- 40 buttons;
- 10 sliders or SeekBars;
- Background settings;
- Other elements used in page design.

After adding a button, you can move it around the screen by dragging it with your finger.

## Button Properties

By selecting a button and tapping the **Edit** icon, its properties are shown. From this section you can set:

- Button size;
- Button position;
- Button color;
- Button background;
- Button text;
- Button name;
- Font;
- Font size;
- Button order;
- Button behavior;
- Button effect;
- Click sound;
- Vibration.

A long-press on the button also opens the behavior section directly.

### Copying Button Properties

You can copy a button's properties and apply them to another button:

1. Select the first button.
2. From the Edit menu, choose **Copy Properties**.
3. Select the second button.
4. From the Edit menu, choose **Paste Properties**.

### Layer Order

The button created earlier stays in the lower layer. So, if you want a button to act as a background, create it first and then place other buttons on top of it.

## Navigating Between Pages and Folders

To move from one page to another:

1. Create a button on the source page.
2. Open the button's behavior section.
3. Choose the **Reload** or **Load Page/Folder** behavior.
4. From the displayed list, pick the target page.
5. Run the project in the **Play** screen.

Tapping the button takes the user to the selected page.

To go back, you must also create a separate button on the target page and connect it to the previous page the same way. With the **Reload** behavior, you can move between pages in a folder or even between different folders.

## Button Behaviors

Buttons can have various behaviors, including:

- Send;
- Receive;
- Note;
- PDF shortcut;
- Image display;
- Open X;
- Reload or Load Page/Folder;
- WebView;
- Play sound or music;
- Click action;
- Vibration.

Some behaviors are specialized, like **WebView** and **Note**. Others, like **PDF** and **Image**, act more as shortcuts or simple displays.

## Classic Mode

In Classic Mode, the user places buttons and sliders on the page and defines a separate behavior for each one.

This mode is suitable for tasks such as:

- Sending and receiving Bluetooth data;
- Sending and receiving MQTT data;
- Sending and receiving API data;
- Receiving sensor data;
- Displaying received values;
- Running effects based on received values;
- Displaying charts;
- Changing a button's color, size, or rotation.

## Numeric and String Data Reception

In Classic Mode, received data can be processed in two ways:

### Numeric Reception

In this mode, data is processed as a numeric value and can trigger various effects, such as:

- Rotation;
- Color change;
- Size change;
- Position change;
- Chart display.

To use numeric effects, a maximum value (**Maximum**) must be set.

For example, if a button is set to rotate and its range is up to 306 degrees, sending different values within that range will rotate the button according to the received value.

The user can decide whether the numeric value is shown on the button or only used for the effect.

### String or Text Reception

In this mode, data is displayed as text. This section acts more like a **Label** or a **Terminal**.

With each new input, the display is refreshed and the new text replaces the previous one.

## Name, Prefix, and Suffix

In the value display settings, there are options to control the display format:

- Show or hide the button name;
- Set a prefix;
- Set a suffix.

For example, you can define a name or unit like "centimeter" so the received value is displayed along with it.

## Filtering Received Data

If the start and end filters are empty, the receiver accepts all inputs.

To separate data, you can define a specific prefix, suffix, or identifier for the message. In this case, the button only processes data that matches the defined identifier.

For example, if the sender sends the message with `Input1`, you can set the filter to that same string. In this case:

- Unrelated data is ignored;
- The identifier is not displayed;
- Only the main value is processed or displayed.

## Effects

After setting the button behavior, the **Effect** option becomes active in the Edit menu.

To receive an effect, the button behavior must be set to **numeric reception**, not text reception. Then set the **Maximum** value so the app can calculate the effect intensity.

## Note

Each **Note** button can have its own note. Notes are stored separately in the project folder.

In the **Play** screen, each Note has its own note page. This page has basic note-taking features and can also send and receive text or commands.

Note communication methods include:

- Serial Bluetooth;
- MQTT;
- API.

With Note you can:

- Send text or commands;
- Send microcontroller commands;
- Control a robot;
- Send behavior patterns;
- Send CNC G-code commands;
- Receive potentiometer or encoder data;
- Save commands line by line;
- Resend saved commands to repeat the same movements.

For sending, options like data format, Bluetooth timing, and MQTT/API settings are available.

### Note Modules

The Note menu has two important modules:

- **Rangmang:** for controlling WS2812 LED strips and decorating advertising boards.
- **CMI209:** for controlling CNC machines.

These modules work as Views, generate the required code, and place it on the Note via the communication bridge. The user can then send the code to the module via Bluetooth.
## WebView

The most important feature of SoifGo is defining the **WebView** behavior for buttons.

To create a WebView:

1. Add a button on the **Edit** screen.
2. Open the button's behavior section.
3. Choose the **WebView** behavior.
4. Specify the WebView type.
5. Go to the **Play** screen and run it.

There are two types of WebView:

- Online WebView;
- Offline HTML WebView.

### Online WebView

Online WebView acts like a simple browser for viewing and using internet pages.

### Offline WebView

Offline WebView is used to run HTML files and pages stored in the project.

In this section you can:

- Create a simple web page;
- Pick an HTML file from the file explorer;
- Load or reload the web page;
- Choose ready-made samples inside SoifGo;
- Choose HTML files stored in the project folder.

## Editing HTML

After creating an offline HTML WebView, you can tap it in the **Play** screen and enter the edit page from its menu.

HTML code is displayed in a standard, colored format so tags, code, and scripts are easier to recognize.

Edit menu options include:

- Rename;
- Save;
- Find;
- Find and replace;
- Pick color;
- Find color;
- Change text size;
- Show line numbers;
- Wrap lines;
- Select All and Paste.

The **Select All and Paste** option is used to quickly replace HTML code. The user can generate and copy code with the help of an AI assistant, then paste it into the editor using this option.

When done, tap **Close** at the top of the screen to exit the editor and see the result in the **Play** screen.

## Using an AI Assistant

To quickly turn an idea into a Web Application, you can ask an AI assistant to generate the required HTML code.

Steps:

1. Describe your idea to the assistant.
2. Ask it to generate the appropriate HTML code.
3. Copy the code.
4. Enter the WebView editor.
5. Use **Select All and Paste**.
6. Close the page and see the result in Play.

Ready-made WebView samples are also available on the website and inside the app. The user can pick a sample, view its code, modify it, and use it to build their project.

The original sample does not change. When a sample is selected, SoifGo places a copy of it in the project's HTML folder, and all edits are applied to that copy.

Each button can have its own independent WebView, and different WebView files are stored separately in the project's HTML folder.

## WebView Communication Bridges

The functions and bridges used in Classic Mode for sending and receiving Bluetooth, MQTT, API, and other communications are also available in WebView.

Using these bridges, the HTML page can communicate with features such as:

- Bluetooth;
- MQTT;
- API;
- Microphone;
- Data storage;
- Internal sensors.

The guide for calling these functions and related sample code is in the SoifGo guide and the WebView communication bridges section. Sample code can also be given to an AI assistant, asking it to build the desired Web Application with those functions.

### Bridge Call Pattern

Inside SoifGo's WebView, a JavaScript object called `window.soifgo` is injected automatically. Use it to call native functions from JavaScript.

**Rules:**
- The first argument is the **Sub name** (string).
- The second argument is always a **boolean** (`true` or `false`).
- After the flag, you can pass **up to 3 arguments**.
- Empty strings must still be passed as `''` — never omit them.
- Always guard with `if (window.soifgo) { ... }` — the bridge only exists inside SoifGo.

---

## Available Subs (Send — called from JavaScript)

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

Activates the light sensor. SoifGo will start sending light data to `html_sensor_light`.

---

#### `sensor_move`

```js
window.soifgo.CallSub('sensor_move', true);
```

Activates the movement sensor. SoifGo will start sending X/Y data to `html_sensor_movex` and `html_sensor_movey`.

---

#### `sensor_magno`

```js
window.soifgo.CallSub('sensor_magno', true);
```

Activates the magnetic sensor. SoifGo will start sending data to `html_sensor_magno`.

> **Note:** Call all three to activate all sensors. Typically called inside `window.onload`.

---

### 🎤 Microphone

#### `request_mic_perm`

```js
window.soifgo.CallSub('request_mic_perm', true, null);
```

Requests microphone permission. Shows the native Android dialog the first time only.

> **Note:** After the user allows once, Android remembers the choice. Later calls are silently ignored.

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

```js
window.soifgo.CallSub('connecte_mqtt_ai', true, 'tcp://test.mosquitto.org:1883', 'myClient_001');
```

---

#### `connecte_mqtt_up`

```js
window.soifgo.CallSub('connecte_mqtt_up', true, username, password);
```

Step 2 (optional) — authentication. Only call if the broker requires a username/password.

| Parameter | Type | Description |
|---|---|---|
| `username` | string | Broker username (empty string if none) |
| `password` | string | Broker password (empty string if none) |

```js
window.soifgo.CallSub('connecte_mqtt_up', true, 'user', 'pass');
```

---

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

```js
window.soifgo.CallSub('mqtt_publish', true, 'soifgo/led', 'ON', '0');
```

---

#### `mqtt_Disconnect`

```js
window.soifgo.CallSub('mqtt_Disconnect', true);
```

Disconnects from the broker. No arguments.

---

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

```js
window.soifgo.CallSub('api_send', true, 'https://example.com/api', 'temperature', '25');
```

Body sent: `{"temperature":"25"}` with `Content-Type: application/json`.

---

#### `api_recive`

```js
window.soifgo.CallSub('api_recive', true, address, key);
```

Sends a GET request. SoifGo extracts the branch of the JSON matching `key` and returns it via `api_rx`.

| Parameter | Type | Description |
|---|---|---|
| `address` | string | API endpoint URL |
| `key` | string | JSON key to extract (e.g. `Price`). **Required** |

```js
window.soifgo.CallSub('api_recive', true, 'https://api.example.com/price', 'Price');
```

> **Note:** The response format depends on the API provider. It can arrive as a plain value (`86846.51`) or as a wrapped map (`{usd=86750}`). See the API section for details.

---

## Available Receivers (called by SoifGo)

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

Called by SoifGo when Bluetooth data arrives.

| Parameter | Type | Description |
|---|---|---|
| `data` | string | The received Bluetooth data |

---

### 🟢 Sensors

#### `html_sensor_light`

```js
function html_sensor_light(data) { /* ... */ }
window.html_sensor_light = html_sensor_light;
```

Receives light sensor value.

---

#### `html_sensor_movex`

```js
function html_sensor_movex(data) { /* ... */ }
window.html_sensor_movex = html_sensor_movex;
```

Receives movement sensor X-axis value.

---

#### `html_sensor_movey`

```js
function html_sensor_movey(data) { /* ... */ }
window.html_sensor_movey = html_sensor_movey;
```

Receives movement sensor Y-axis value.

---

#### `html_sensor_magno`

```js
function html_sensor_magno(data) { /* ... */ }
window.html_sensor_magno = html_sensor_magno;
```

Receives magnetic sensor value.

---

### 🟣 MQTT

#### `mqtt_rx`

```js
function mqtt_rx(topic, message) {
    console.log(topic, message);
}
window.mqtt_rx = mqtt_rx;
```

Called by SoifGo when a message arrives on a subscribed topic.

| Parameter | Type | Description |
|---|---|---|
| `topic` | string | The topic the message arrived on |
| `message` | string | The message payload |

---

#### `html_mqtt_status`

```js
function html_mqtt_status(connected) {
    const isConnected = (connected === true || connected === 'true');
    // use isConnected
}
window.html_mqtt_status = html_mqtt_status;
```

Called by SoifGo in response to `mqtt_status`.

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

Called by SoifGo with the API response.

| Parameter | Type | Description |
|---|---|---|
| `number` | string | The extracted value. May be a plain number (`86846.51`) or a wrapped map (`{usd=86750}`) |

> ⚠️ **Important:** Handle both response formats. See the API section for the robust extractor.

---

## Complete Sub List

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

> For full working examples, see the [SoifGo HTML Guide](send_bluetooth_html/html_guide_1.html).

> For full parameter details and live examples, see the [SoifGo HTML Guide](send_bluetooth_html/html_guide_1.html).

## Bluetooth

In the **Play** screen, the Bluetooth icon is in the top-right corner.

To connect to a Bluetooth module:

1. First, pair the module from your phone's Bluetooth settings.
2. Tap the Bluetooth icon in SoifGo.
3. Pick the desired module from the list.
4. Establish the connection.

SoifGo's Bluetooth list is the same as your phone's Bluetooth device list. SoifGo uses Android's built-in features and libraries for connection, so any Bluetooth data device supported by the phone will also work in the app.

After selecting a module once, the connection to that module happens automatically next time. To change the module or show the list again, long-press the Bluetooth icon.

SoifGo is designed for Bluetooth **data** devices and modules, not audio Bluetooth devices like headphones and speakers.

In the Bluetooth menu you can view and set:

- Received data;
- Sent data;
- Bluetooth settings;
- Data send format.

## MQTT

There are two MQTT modes.

### Test Mode

In this mode, a default address is used and no username or password is needed. The user only sets the address and Topic, and can send or receive data.

### Professional Mode

In Professional Mode you can set:

- Server address;
- Topic;
- Username;
- Password;
- Connection port;
- Client ID.

A default value exists for Client ID, but the user can enter their own.

In MQTT send mode, the user defines the Message text and sends it to the selected Topic.

## API

SoifGo supports sending and receiving via API. To receive from an API, the address and the target keyword must be set.

For example, to get the Bitcoin price from an API:

1. Set the button behavior to **API receive**.
2. Enter the API address.
3. Set the keyword for the value, such as `Price`.
4. Set the reception to numeric if needed.
5. Define effects like rotation, color change, or size change for the received value.
6. Use start and end filters to remove extra parts like `Dollars`.

## Simulation

The **Simulation** option is used to test the project's behavior without a real connection to a module.

For example, if a button is set to receive Bluetooth data, Simulation generates numeric data and injects it into different parts of the app.

Ready-made simulation ranges include:

- 0 to 1024;
- -1024 to +1024;
- A few other sample ranges.

This feature is useful for testing data reception, effects, button changes, and other behaviors.

## Sound and Vibration

A button can have sound and vibration behaviors.

### Vibration

Vibration intensity can be set based on the selected style or pattern.

### Sound

Several default sounds exist in the app, such as click sound and page sound. A sound file can also be picked from the phone's storage via File Explorer.

The selected file is stored in the project folder so it can be transferred and archived with the project.

## Storage and Undo/Redo

All changes in SoifGo are saved automatically, and the user does not need to save manually.

The following options are also available:

- **Undo:** revert changes;
- **Redo:** reapply reverted changes.

## File and Folder Management

SoifGo creates a folder named **SoifGo** in the phone's local storage. Folders and projects created by the user are placed inside this folder.

For easier management, separate folders exist for:

- HTML;
- Note;
- Icons;
- Sounds;
- SVG;
- Images and project files.

Through the phone's file manager, the user can:

- Copy;
- Move;
- Delete;
- Rename;
- ZIP;
- Share;
- Back up.

SoifGo itself also has options like open and rename. For deleting files, it is better to use the phone's file manager.

Be careful when deleting a file or folder; if a file the project depends on is deleted, that part may no longer work inside the app.

## Transferring a Project to Another Phone

To transfer a project:

1. Find the project folder inside the SoifGo folder.
2. Copy or ZIP it.
3. Send the file to the other person.
4. The receiver extracts the ZIP file.
5. Place the project folder inside the main SoifGo folder on the phone.
6. Open SoifGo.
7. From the Select Design section, pick the existing folder.

No new folder needs to be created; once the project is in the right place, it appears in the list with its pages, files, and designs.

## File Extensions

To prevent project images and files from showing in the phone gallery, the extensions of some files are intentionally changed.

SoifGo manages extension changes inside the app, and the user does not need to change anything manually for normal use.

If the user wants to view an image or icon in the phone gallery, they should swap the first two parts of the extension so the standard file extension is rebuilt.

## Android Permissions

SoifGo asks the user for permission to use device features, and no feature is enabled without the user's permission.

- The camera is not defined in the app's current features.
- The microphone is enabled only with the user's permission.
- If microphone permission is not granted, features like sound metering, voice command, and speech-to-text will not work.
- Sections that do not need the microphone remain usable.

In WebView, using the **Voice to Text** library, the user's voice can be converted to text and sent to a microcontroller, Arduino, or other modules; this feature requires microphone permission.

## Summary

SoifGo is an environment for quickly building tools and practical apps on Android. The user can use Classic Mode to build pages with buttons and sliders, or use WebView and HTML to build more complex and custom applications.

By combining the following features, different ideas can be turned into working projects:

- Buttons and sliders;
- Online and offline WebView;
- HTML and JavaScript;
- Note;
- Bluetooth;
- MQTT;
- API;
- Microphone;
- Sensors;
- Storage;
- Simulation;
- Graphic effects;
- Sound and vibration.

## Website Guide

The official SoifGo website (`https://soifgo.github.io/soifgo/`) includes the following sections:

- **Download:** Download SoifGo v1.42 (ZIP package) or from APKPure. The VirusTotal security report is also available in this section.
- **Story:** The story behind SoifGo and why it was created.
- **What it does:** Custom HTML interfaces, Bluetooth, MQTT, phone sensors, and working examples.
- **AI Context:** Machine-readable file (`SOIFGO_AI_CONTEXT.md`) and `llms.txt` for AI assistants.
- **Get Started:** Entry points for regular users and developers.
- **Tutorials:** List of top tutorials (Bluetooth, MQTT, HTML, Effects, Voice, Note, RANGMANG, CMI209, and more).
- **FAQ:** Frequently asked questions.
- **Docs:** Technical documentation.
- **Forum:** GitHub Discussions for questions and help from the community.

### Key Links

- Website: https://soifgo.github.io/soifgo/
- AI Context: SOIFGO_AI_CONTEXT.md
- Quick AI Index: llms.txt
- GitHub: https://github.com/soifgo/soifgo
- Forum: https://github.com/soifgo/soifgo/discussions
- Support: ssmqqmss@gmail.com