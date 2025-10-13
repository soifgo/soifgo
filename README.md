###  The developer :  Saeid Moghadam

# Supported Languages in soifgo

- English (EN)  
- Spanish (Español)  
- Chinese (简体中文)  
- French (Français)  
- German (Deutsch)  
- Japanese (日本語)  
- Russian (Русский)  
- Arabic (العربية)  
- Persian (فارسی)  
- Italian (Italiano)  
- Hindi (हिन्दी)  
- Turkish (Türkçe)  
- Korean (한국어)  
- Portuguese (Português)  
- Hebrew (עברית)  
- Kurdish (کوردی)
- Urdu (اردو)
- Bengali (বাংলা) 
- Indonesian (Bahasa Indonesia) 
- Tamil (தமிழ்)
- Thai (ไทย)
- Swahili (Kiswahili) 



# soifgo  
soifgo is an Android application that provides users with advanced capabilities using **buttons and seek bars**. It offers features such as:  

- **Bluetooth communication:** Sending and receiving serial Bluetooth data.  
- **API server interaction & web browsing:** Seamless website access and API requests.  
- **Managing HTML files & notes:** Open, edit, and send note lines directly via Bluetooth serial.  
- **Shortcut & library management for PDFs and images:** Buttons can open files and store them separately from their source.  
- **Seek bar control:** Display values, adjust them, and transmit the updated data via serial Bluetooth.  
- **Customizable buttons:** Change **size, color, name, shape, vibration, and behavior** to match user preferences.  
- **Dynamic effects based on Bluetooth input:** Modify **size, position, rotation, color changes, circular visual effects, and graph rendering** based on input values.  
- **Graph storage & review:** Store and review received graphical data directly inside buttons.  
- **Predefined seek bar values:** Send preset values before and after any modification to enhance interaction.  
- **Optimized RGB color control:** Seek bars support precise RGB adjustments for **WS2812, WS2813, WS2815, and  SET RBG WS2811**.  
- **Bluetooth format selection:** Supports multiple formats such as `CR + LF`, `CR`, `LF`, `NULL`, and more.  
- **Smart Bluetooth resend (Check-in):** If **no response is received**, data is **automatically resent up to three times** for reliability.  
## **Installation & Setup**  
### **Download & Access**  
soifgo is available for download from multiple sources:  
- [Apkpure](https://apkpure.com/soifgo/soifgo.ssm20985)  
- [GitHub Repository](https://github.com/soifgo/soifgo)  
- [Google Drive]([https://drive.google.com/open?id=17YyAkehXi9yJsomCJNS9DfSHyL3hHiMH&usp=drive_fs](https://drive.google.com/file/d/1VwCc8S-vnl2r8UlI4RhWkUh228GJG53-/view?usp=drive_link)

### **Storage Requirements & Permissions**  
- soifgo is designed to work with **external storage**, ensuring **easy access to folders for editing, sharing, and backups**.  
- Upon installation, the app **requests permission** to create and manage **its dedicated folder**. This is necessary for **file organization, Bluetooth updates, and proper functionality**.  
- Without granting storage access, users may encounter limitations in **saving, retrieving, or managing their designs**.  

---

### **Startup Screen (Play Mode)**  
Upon launching soifgo, users are welcomed by the **Play Mode screen**, featuring:  
- **Top-left:** A turquoise **Play Icon**, indicating active interaction.  
- **Top-right:** A **Bluetooth Icon**, providing access to the list of available devices.  
  - On first use, the **Bluetooth device list appears** for connection selection.  
  - After the initial pairing, the app **automatically reconnects to the last-used device** unless modified.  
  - To **change the Bluetooth device**, **long-press the Bluetooth icon** to re-open the selection list.  

### **Play Mode Menu Options**  
By clicking on the **list icon**, users gain access to key functions:  
1. **Edit Mode:** Opens the design and customization page.  
2. **Language Selection:** Supports multiple languages including **English, Spanish, Chinese, French, German, Japanese, Russian, Arabic, Persian, Italian, Hindi, Turkish, Korean, Portuguese, Hebrew, Kurdish**.  
3. **YouTube Access:** Redirects users to the app's YouTube page.  
4. **Donate:** Displays a **QR code and crypto wallet address** for supporting the project with Bitcoin.  
5. **Update Options:** Provides **direct update links** for  [Apkpure](https://apkpure.com/soifgo/soifgo.ssm20985) and [GitHub](https://github.com/soifgo/soifgo).  
6. Enable Simulation Mode: Simulates input values from 0 to 1024 using address: 123, allowing users to test effects without physical hardware  "Value:Address   value=0 to 1024  Address=123". 
7. **Display Simulation Values:** Shows incoming simulated values.  
8. **Phone Sensor Integration:** Opens a window featuring motion and magnetism sensors.  
   - **Light Sensor:** Address **991**   Value:Address  145:991 
   - **X-Axis Motion:** Address **992**    Value:Address  145:992
   - **Y-Axis Motion:** Address **993**    Value:Address   145:993 
   - **Magnetism:** Address **994**        Value:Address    145:994 
   - These addresses can be mapped to buttons for **effect triggering**.  
9. **Send Bluetooth Data:** Activates a **textbox & send button** for entering and transmitting custom data.  
10. **Bluetooth Format Selection:** Allows users to choose between **CR + LF, CR, LF, STX/ETX, NULL, NON-NULL formats**.  
11. **Reset Bluetooth:** Long-press the Bluetooth icon to **reset connection settings**.  
12. **Display Received Bluetooth Data:** Enables the **display of incoming Bluetooth values**.  

---

### **Navigating to Edit Mode**  
By clicking **Edit** in Play Mode, users transition into **Design Mode**, where:  
- The **Bluetooth icon disappears**, focusing solely on design features.  
- The **Play icon changes to a Pause icon**, indicating editing mode is active.  
- Users can modify buttons, seek bars, backgrounds, layouts, and interactions.  

---

This concludes **Section 2: Installation & Setup**! Let me know when you're ready for **Section 3: Design Mode & Button Configuration**. 🚀

## **Design Mode & Button Configuration**  
### **Entering Edit Mode**  
Once inside Edit Mode, several adjustments can be made to **buttons and seek bars**:  
- **Play icon changes to Pause**, indicating editing mode is active.  
- **Bluetooth features disappear**, focusing exclusively on customization options.  

### **Quick Edit: Shadow Assistant**  
- A temporary **shadow assistant icon** appears for about **one minute** in the design screen.  
- Clicking on this icon **applies the last editing settings to new buttons**, saving time.  
- To use this feature:  
  1. Select a button.  
  2. Click the **Shadow Assistant** icon.  
  3. The most recent **size, movement, rotation, and visual effects** will be copied to the next selected button.  

---

### **Button Editing Menu**  
Clicking a button and selecting the **Pause icon** opens **three key sections**:  
1. **Play Mode:** Returns to the execution screen.  
2. **Design Mode:** Accesses button customization options.  
3. **Settings:** Modifies general app behaviors.  

Beyond the standard navigation, here’s the **full list of button customization options**:  
#### **1. Copy Features**  
- Copies **all properties** of a button except its position.  

#### **2. Paste Features**  
- After copying a button, selecting another button and pasting will apply **size, color, text, behavior, and visual effects**.  

#### **3. Delete Button**  
- Removes the selected button **after confirmation**.  

#### **4. Background Configuration**  
- **Button color**  
- **Corner rounding** (soft edges)  
- **Adding an icon or background image**  
- **Text color & size**  

#### **5. Button Name & Visibility**  
- A **textbox appears**, allowing text input.  
- Users can toggle the **show/hide** option to control text visibility on the button.  

#### **6. Adjusting Size**  
- Two **seek bars** control **width and height** of the button.  

#### **7. Button Movement Options**  
- **Touch movement:** The button **follows the finger's movement** across the screen.  
- **Precision adjustment:** Provides **four directional controls** for **fine-tuning placement**.  

#### **8. Defining Button Behavior**  
- A large **turquoise label** appears with `"non"` (indicating no behavior set).  
- Clicking this label reveals **behavior options** such as:  
  - **Send Bluetooth data**  
  - **Send SMS or API request**  
  - **Receive Bluetooth or API data**  
  - **Load web content (Online & Offline HTML)**  
  - **Display images, notes, or PDFs**  
  - **Modify seek bar values** (+1, -1, display value)  

#### **9. Open Pages & Folders**  
- Buttons can be configured to **switch between different pages or folders** inside soifgo.  

#### **10. Sound Effects**  
- Users can assign **click sounds, error sounds, or custom sounds** from storage.  
- **Stopping long sounds:**  
  - **Long press** the button to stop playback.  
  - **Tap again** to restart from the beginning.  

#### **11. Vibration Settings**  
- Enable vibration feedback for button presses.  
- Adjust **intensity via a seek bar**.  

#### **12. Button Effects (Triggered by Received Data)**  
- If a button **receives numerical input via Bluetooth or API**, effects can be enabled:  
  - **Size change**  
  - **Position shift**  
  - **Color adjustment**  
  - **Circular visual effect**  
  - **Rotation**  
  - **Graph plotting & storage**  
  - **Formula-based transformation**

- You can apply mathematical operations to the received value before triggering effects.  
  For example, to convert a value from `0–1024` to a voltage range of `0–5`, use:  
  `val / 204.8`  
  The result will be reflected in the button’s behavior or appearance.

- If you're looking to apply rounding, scaling, or other transformations, click the **`?` label** next to the formula field to open the **Formula Guide**.  
  The guide includes supported operators, math functions, and examples for value mapping and UI control.


#### **13. Button Alarms (Threshold Alerts)**  
- If configured for **data reception**, alarms can be set based on input values:  
  - Define **minimum/maximum thresholds** for triggering alerts.  
  - Specify **alarm text**.  
  - **Sound plays upon alert activation** if a sound is assigned to the button.  

---

That wraps up **Section 3: Design Mode & Button Configuration**! 🚀  

Now, are you ready for **Section 4: Seek Bar Settings & Bluetooth Communication**? 😃  

## **Seek Bar Settings & Bluetooth Communication**  
### **Editing Seek Bars**  
Seek bars have slightly different editing options compared to buttons. After clicking **Pause Mode**, users can access the following settings:  
#### **1. Copy Features**  
- Copies all attributes of a seek bar **except its position**.  

#### **2. Paste Features**  
- After copying from one seek bar, pasting onto another will apply **size, color, value settings, and behavior**.  

#### **3. Delete Seek Bar**  
- Removes the selected seek bar after confirmation.  

#### **4. Adjusting Size**  
- Controls **width and height** using seek bars.  

#### **5. Movement**  
- Seek bars support **touch movement only** (no fine directional controls).  

#### **6. Background Configuration**  
- Users can modify **seek bar color or apply a background image**.  

#### **7. Value Settings (Key Feature)**  
Each seek bar acts as a **Bluetooth data sender**, and has three key textboxes:  
- **Fixed Initial Value:** If left empty, the seek bar does not send any value until manually changed.  
- **Maximum Variable Value:** Determines the **upper limit** for dynamic value changes.  
- **Final Value or Ending Text:** Optional; useful for labeling transmitted values (e.g., `"Position: [value] cm"`).  

Users can set specific **prefixes and suffixes** to structure outgoing data—for instance, sending `"Sensor [value]"` where **"Sensor" is the prefix**, and **the numerical value is dynamic**.  

---

### **Advanced Seek Bar Features**  
#### **8. Leading Zero Formatting**  
- Converts numbers into **consistent three-digit format** (`1 → 001`, `10 → 010`, `100 → 100`).  

#### **9. Bluetooth Format Selection**  
- Users can select different transmission formats:  
  - `CR + LF`  
  - `CR`  
  - `LF`  
  - `NULL`  

#### **10. Check-in Resend Mechanism**  
- **If Bluetooth feedback is not received**, the seek bar **automatically resends the same value up to three times** to ensure proper transmission.  

#### **11. RGB Control for Lighting Modules**  
- Designed for  RGB **WS2812, WS2813, WS2815, and SET RBG WS2811** lighting systems.  
- Uses **three consecutive values** (`000 000 000` → `255 255 255`), where each part represents a **color intensity (Red, Green, Blue)**.  
- Adjusting the seek bar **modifies real-time RGB lighting values**.  

#### **12. Custom Color Picker**  
- Users can select **specific RGB values** for advanced color control.  

#### **13. Display Seek Bar Changes**  
- Shows real-time modifications **as numerical values** to track adjustments visually.  

#### **14. Background Image Support**  
- Allows **custom seek bar backgrounds** for enhanced UI customization.  

---

This wraps up **Section 4: Seek Bar Settings & Bluetooth Communication**! 🚀  

Let me know when you’re ready for **Section 5: Interaction with Sensors & API Servers**! 😃  

## **Interaction with Sensors & API Servers**  
### **Integrating Phone Sensors**  
soifgo allows users to interact with **motion and magnetism sensors**, enhancing interactive designs with **real-time sensor data**.  

#### **1. Available Sensors & Data Addresses**  
Each sensor operates with a **specific data address**, which buttons can be mapped to:  
- **Light Sensor:** Address `991`   Value:Address
- **X-Axis Motion:** Address `992`    Value:Address
- **Y-Axis Motion:** Address `993`    Value:Address
- **Magnetism Sensor:** Address `994`    Value:Address

#### **2. Applying Sensor Data to Buttons**  
Buttons can be **configured to receive sensor values** and trigger **visual effects** based on movement or environmental changes.  
For example:  
- **Button resizing** based on brightness levels.  
- **Button rotation** linked to phone tilt.  
- **Color shifts** depending on surrounding magnetic fields.  

#### **3. Sending Sensor Data via Bluetooth**  
Users can configure **automatic Bluetooth transmissions** based on sensor readings.  
- If the phone **detects motion**, the app can **broadcast the detected value** through Bluetooth.  
- Sensor data can be combined with seek bar values to enhance **interactive control systems**.  

---

### **API Server Interaction & Web Requests**  
soifgo integrates with **API servers** to enable **automated communication with external platforms**.  

#### **1. Sending API Requests**  
- Buttons can be configured to **send HTTP requests** to API endpoints.  
- Users can **define request formats**, including:  
  - **GET requests** for fetching data.  
  - **POST requests** for submitting information.  
  - **Custom headers and parameters** for advanced API communication.  

#### **2. Receiving API Data**  
- API responses can be **processed dynamically**, allowing users to:  
  - **Display received data** inside buttons.  
  - **Trigger effects based on API responses** (e.g., visual feedback when receiving sensor data).  
  - **Modify seek bar values** based on API-controlled variables.  

---

### **Real-Time Web Interaction**  
Users can configure buttons to **open webpages**, either:  
- **Online (Live Webpages)**  
- **Offline (Local HTML Files)**  

By tapping a button configured for web interaction, users can **quickly access stored pages or live URLs** without leaving the app.  

---

That concludes **Section 5: Interaction with Sensors & API Servers**! 🚀  

Next up is **Section 6: File Management & Shortcuts**—let me know when you’re ready! 😃  

## **File Management & Shortcuts**  
### **Managing Notes & HTML Files**  
soifgo supports **opening, editing, and storing notes and HTML files** directly within the app.  

#### **1. Editing Notes & HTML Documents**  
- Users can **open text-based documents**, modify content, and save changes seamlessly.  
- Each note can be **sent line by line via Bluetooth**, allowing interaction with connected devices.  
- **HTML files** can be **opened, modified, and previewed** for offline or online use.  

#### **2. Storing Notes & HTML Files**  
- Notes and HTML files can be **added to the app's internal library**, ensuring quick access later.  
- Storing files separately from their source allows **dynamic modifications without affecting original files**.  

---

### **PDF & Image Management**  
soifgo offers **shortcut creation and internal storage** for PDFs and images.  

#### **1. Shortcut Creation for PDFs**  
- Buttons can be **configured as shortcuts** to open **specific PDF files** directly.  
- Users can **organize PDFs** within the app, creating a **customized document library**.  

#### **2. Image Library Management**  
- Users can **store images within soifgo**, detaching them from their original source.  
- Images remain accessible **even if the original file is deleted**, ensuring long-term storage inside the app.  

---

### **Shortcut-Based Navigation**  
Buttons can be programmed to **open specific pages, folders, or documents**:  
- **Folder Shortcuts:** Direct access to internal directories.  
- **Page Shortcuts:** Instant transitions between design pages.  
- **File Shortcuts:** One-click access to stored PDFs, notes, and images.  

Users can **structure their workspace efficiently**, eliminating manual searches for frequently accessed files.  

---

That concludes **Section 6: File Management & Shortcuts**! 🚀  

Let me know when you're ready for **Section 7: System Behaviors & Customization Settings**! 😃  

## **System Behaviors & Customization Settings**  
### **Global Settings Configuration**  
soifgo provides various system-wide customization options to enhance user control.  

#### **1. Enabling Menu Sounds**  
- Users can **activate/deactivate sound effects** when navigating menus.  
- Sounds provide **audible feedback**, helping users confirm interactions.  

#### **2. Keep Screen Awake Mode**  
- When enabled, the screen remains **active without dimming** during use.  
- Prevents accidental interruptions when designing layouts or interacting with Bluetooth data.  

---

### **Behavioral Customization for Buttons & Seek Bars**  
#### **1. Defining Interactive Actions**  
Users can **customize how buttons and seek bars respond** to external signals.  
For instance:  
- **Seek bars can automatically transmit Bluetooth data** when adjusted.  
- **Buttons can trigger timed actions** instead of requiring manual presses.  
- **Sensor-based interactions** allow for dynamic adjustments based on environmental feedback.  

#### **2. Timed Execution for Buttons**  
- Users can configure **buttons to trigger actions automatically** based on time intervals.  
- Example: Pressing a button **once** can cause it to **repeat execution** at specific intervals.  

#### **3. Button-Linked Seek Bar Adjustments**  
- Users can **set buttons to control seek bar values**, modifying numbers dynamically.  
- Example: A button can **increase or decrease seek bar values** step-by-step or continuously.  

---

### **Handling Bluetooth Data & Storage**  
#### **1. Data Buffering & Error Handling**  
- If Bluetooth **data transmission fails**, the system will:  
  1. **Retry sending data** automatically.  
  2. Notify users **if acknowledgment signals aren’t received**.  
  3. Allow users to **manually reset Bluetooth settings** when necessary.  

#### **2. Organizing Received Bluetooth Data**  
- Incoming Bluetooth values can be **stored and reviewed** within the app.  
- Users can **visualize data in graphical form** for tracking received transmissions.  

---

### **Customizing UI Layout & Themes**  
Users can tailor **the overall look and feel** of the app interface, including:  
- **Color schemes**  
- **Icon adjustments**  
- **Text visibility & formatting**  
- **Background customization**  

Each layout is optimized to provide an **intuitive and responsive** experience.  

---

That concludes **Section 7: System Behaviors & Customization Settings**! 🚀  

Let me know when you're ready for **Section 8: Final Notes & Version Updates**! 😃  
## **Final Notes & Version Updates**  
### **Maintaining Up-to-Date Versions**  
soifgo offers **multiple update sources**, ensuring users always have the latest version:  
- [Apkpure](https://apkpure.com/soifgo/soifgo.ssm20985)  
- [GitHub Repository](https://github.com/soifgo/soifgo)  
- [Google Drive](https://drive.google.com/open?id=17YyAkehXi9yJsomCJNS9DfSHyL3hHiMH&usp=drive_fs)  

### **Future Features & Improvements**  
Upcoming updates will focus on:  
- **Enhanced Bluetooth stability** to minimize disconnection issues.  
- **Additional button behaviors** for expanded interaction control.  
- **UI improvements** to streamline navigation and customization.  
- **Extended API integration** for more flexible server communication.  

### **Supporting the Project**  
soifgo is **free, ad-free, and open to community feedback** for continuous improvement. Users can support the project via:  
- **Feature requests** and suggestions on GitHub.  
- **Bug reports** to enhance app stability.  
- **Donations** via cryptocurrency for development sustainability.  

---

### **Final Thoughts**  
soifgo is designed for **flexibility, customization, and advanced control** over UI, Bluetooth interactions, and data processing.  
With an intuitive editing system, powerful seek bar functions, and dynamic button behaviors, users can optimize their workflows seamlessly.  

Thank you for using **soifgo! 🚀**  
















Important:

If you add a new command to the note, ensure you save it by clicking the info icon in the top left and selecting save. Unsaved commands will not execute and will not be saved upon closing the note.

In manual sending mode, avoid using the timer value or custom wait as it will result in improper output.

Server Mode:

Similar to Bluetooth mode with slight differences.

In initial settings, select the server sending mode.

Two Writing Modes:

Without Custom Wait:

- Address
- Value
- Value
- Value

- Example:

- http://192.168.1.104:3000/GET123
- LED1_ON
- LED1_OF
- LED2_ON
- LED2_OF
- LED3_ON
- LED3_OF
- LED4_ON
- LED4_OF
- LED5_ON
- LED5_OF
- LED6_ON
- LED6_OF

With Custom Wait:

- Address
- Value
- Timer (in seconds, between 0 to 3600)
- Value
- Timer

- Example:

- http://192.168.1.104:3000/GET123
- LED1_ON
- 3
- LED1_OF
- 2
- LED2_ON
- 1
- LED2_OF
- 6
- LED3_ON
- 4
- LED3_OF
- 2
- LED4_ON
- 1
- LED4_OF
- 8
- LED5_ON
- 2
- LED5_OF
- 1
- LED6_ON
- 1
- LED6_OF
- 2



Note: An empty line will terminate the program.

Note: No check-in or next reception in server mode.

Settings:

Delay, Auto/Manual Sending, Custom Wait, and Loop are similar to Bluetooth mode.

Important:

Save new commands by clicking the info icon in the top left and selecting save. Unsaved commands will not execute and will not be saved upon closing the note.

In manual sending mode, avoid using the timer value or custom wait as it will result in improper output.

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Setting Up the ESP8266 Module
Download and Extract Files:

Download the ESP8266_json.zip file and extract it.

Open the Arduino Code:

Go to the folder Arduino code for programming the module ESP8266.

Open the      ESP8266_Reporter_connect microcontroller.txt      file and copy the code.

Install Libraries and Paste Code:

Open the Arduino software.

Download the ESP8266 library.

Paste the copied code into the Arduino software.

Configure Board and Port:

In Arduino, set the board to ESP8266.

Configure the USB-to-Serial adapter port (baud rate should be 115200).

Connect Pins:

Connect the adapter pins to the module (ensure the module uses 3.3V).

Reset the Module:

Connect the GPIO0 pin to GND.

Connect the module's reset pin to GND for one second and then disconnect it to reset the module.

Compile the code into the module (ensure the password, server address, modem name, and port match your server and specifications).

Reconnect and Display MAC Address:

After compiling, disconnect the GPIO0 pin and reset the module.

The module’s MAC address will be displayed initially.

Program the Microcontroller:

Program the microcontroller using the bascom folder.

If you do not wish to use Bascom, program the microcontroller with the Atmega16_report.hex file.

Activate the external crystal fuse bit.

Use the Proteus Folder:

Go to the proteus folder for connections, schematics, and additional help.

Start the Local Server:

After assembly, click on Start server.bat in the server folder to start the local server.

Go Online:

For real online use, utilize the two package and server files in the server folder (this method is JSON-based).

Set Up Android Software:

All these steps are explained on YouTube.

https://youtu.be/PV-M5d7y2hA

Paste the main file into the page folder of the Android software to display the soifgo program

!!!!!
Note: If you don't want to keep a computer running as a local server, you can use another ESP8266 module with the first method described but this time using the ESP8266_Server_solo_just_need_power.txt code. Configure this code on another module using Arduino. Note that this module also requires the modem name and password. After uploading the code, the module will announce its MAC address and its own address on each restart. You will need this address for the first module or the reporter connected to the microcontroller. This server module doesn't need anything else except for 3.3 volts to continue operating. Now you can issue your commands in soifgo; the server module will receive them and transfer them to the reporter module. You can network several soifgos with several reporters, but there will be only one server module

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
GET API
In soifgo, you can easily make GET API requests. To do this, you first need to find the hosting site, obtain the key and address, and then configure the button behavior and server request. Set the address field, filter field, and key field so that in the soifgo run mode, the request is automatically sent, and the result is displayed on the created button. Note that there are two types of responses:

Text Response: Set the filter field to 0. If you have a custom response

Value Response: The received value will be rounded off, meaning there will be no decimal places. For example, 123.125 will be converted to 123.

If there is no endpoint in the filter, set it to 0.

Example
Let's say you want to read the Bitcoin price from 
   
https://www.diadata.org/free-crypto-api

Go to the bottom of the page, select Bitcoin, and click on "Show Address". Then, select "coin data", choose "btc", click "run feed", then on the right click on "API endpoint" and copy the URL. Check the result in your browser:

Address:

url:
https://api.diadata.org/v1/assetQuotation/Bitcoin/0x0000000000000000000000000000000000000000
Result:

json:
{
    "Symbol": "BTC",
    "Name": "Bitcoin",
    "Address": "0x0000000000000000000000000000000000000000",
    "Blockchain": "Bitcoin",
    "Price": 95177.90294221917,
    "PriceYesterday": 97568.49469384184,
    "VolumeYesterdayUSD": 26903865165.965874,
    "Time": "2024-12-10T17:47:59Z",
    "Source": "diadata.org",
    "Signature": "0x3f00d254ca357064ed7ae9b96b1275987881b37d56e757afca7d9c659f1fd3381003e60388bf8f10c70e5387805195414ba567d201e169ae765ede851fee2b3d00"
}

Now, if you want to request the price:

Address Field: Enter the API URL 
https://api.diadata.org/v1/assetQuotation/Bitcoin/0x0000000000000000000000000000000000000000 

Filter Field: Set to          0 

Server Key Field: Set to     Price 

Go to the play page and see the updated price. For other APIs, you need to get the address and key. You can use artificial intelligence to help


Graph :

Graphs in soifgo receive values from the button's behavior on the receiver, whether through Bluetooth, API, or server, and they only accept integers between 0 and 99,999. Graphs work with three schedules: internal, external, and oscilloscope. Each graph can have its own specific address, color, and schedule. Graphs are saved in the soifgo Graph folder with the page folder name and the initial button name at the bottom of the graph, and this process continues until the graph is fully drawn and then saved. If the connection is interrupted, the graphing stops but will resume once reconnected. However, if you exit the program, graphing will not continue, and upon restarting the program, the first page will replace the previously named page. To avoid overwriting, you can take a backup or change the button name so that new files are saved separately from the previous ones. If you have multiple graphs with different names for the same button, don't worry. In the end, in graph review mode, simply change the button name to the corresponding graph name to summon and review that graph.

In graphs, four modes are considered:

Mode One: This mode takes an input value between 0 and 999999 over an internal adjustable scheduling period. At the end of the graph drawing, a folder is created in Swift Design graph with the name of the page. Within this folder, a file named "Button" will be created where each graph is stored in order. If you wish to continue graph recording later, you must be on the last empty page. For example, if you have drawn 5 graphs and wish to continue later, click on the graph and use the page forward icon to go to the end until you see the empty page message. You can then append your new graphs to the previous ones. Note that graphs are not saved until they are completed. Even if they are midway, they are not saved until they reach the end of the button.

Mode Two: Similar to the first mode but without saving the graph. In this mode, you will have zoom functionality where you can zoom in up to 20 times horizontally. Clicking in this mode will freeze the graph on the next page so you can review its quantitative properties. Clicking again will resume graph recording. This mode is suitable for temporary and experimental graphs or oscilloscopes with the phone's internal timer.

Mode Three: Similar to the first mode with saving, but not based on the internal timer. Here, with each input value, we move forward one unit. So, if the input speed is high, the graph will be drawn faster, or you can send data slowly per minute depending on your application.

Mode Four: Similar to the third mode without saving, with zoom functionality. This mode is ideal for creating an oscilloscope or viewing wave samples with zoom and freeze capabilities.

Note: If you exit the program and start graphing again, the first graphing page will be considered as the initial state, and the first page graphing will be deleted, replacing it with subsequent graphs. So, if yesterday's graph is important to you, back it up, or better yet, click on the graph and go to the last empty page to keep the initial graphs intact. Alternatively, you can change the name of the button to have a new series of graphs without altering the previous ones. If you want to see the previous graph, just change the button name back. If you receive a graph folder from a friend, you can also set the button name to match the received graph to view or continue those graphs

With a click on any running graph, a list view (Run/Stop View) will be displayed, and if you are in the non-saving mode, a zoom option will be added

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

## Keywords
- soifgo
- swift-design
- custom-html
- android-app
- bluetooth-serial
- apk
- API
- Programmable Buttons
- android
- swift
- Graph
- custom-ui
- Bluetooth-microcontrollers
- Bluetooth Serial Interface to Send data to microcontrollers
- HC-05
- Bluetooth UART
- RGB program


note out :

When the button is configured in behavior note mode, you can use the info icon in the top left corner. By selecting the task option from the info list, you can choose between two types of tasks: sending via Bluetooth or sending via API/Server.

'''''''''''''
Send via Bluetooth:

In this mode, you can send your text to the Bluetooth serial output. The send icon will appear at the top of the screen. By long-pressing this icon, you can access the send type settings, listed from top to bottom:

Delay:

After selecting the delay, a time selection bar will appear at the bottom of the screen. Note that the times depend on the phone's internal timer. Ensure the custom wait option is turned off. In this mode, the first line of your text is sent as the command, and subsequent lines wait for the delay time to elapse before being sent. The delay time is the same for all lines.

LF RF:

This setting defines the data send method and how it is received by the recipient. It includes characters 10 and 13 or the absence thereof, sequential reception, or next line reception. This setting should be configured according to the recipient's method.

Automatic Sending: This setting determines whether the sending is manual or automatic. In manual mode, an icon appears for each send, which you click to send the line. In automatic mode, the sending is done automatically based on delay settings, custom delays, or input checks.

Input Check:

This setting is for serial echo or verifying the correctness of the sent value. The recipient should resend what it receives, and the data is checked. If the received and sent data match, the next line is sent. If not, it checks 5 times and gives an error if the send is not confirmed.

Next  Word Check:

If the word "next" or "NEXT" is received, the next line is sent. This setting is suitable for actions with unspecified durations. For example, in a loader where start and end times vary, the next word triggers the next command when a switch is defined at the end.

Custom Wait:

This method allows you to set custom times for sending lines. The times must be written in the text, following this format:

First line: Command

Second line: Time in seconds (only numbers) 

Example:

motor ON
23
Fan ON
11
Vacuum OFF
5


If there is an error in your text, it will give an error.

Loop:

This setting repeats your text or commands. Once activated, your text starts again from the first line after the last line is completed.


 Send via Server/API:
 
All functionalities of this method are similar to the Bluetooth send method, with the following differences:

The input check and next word options are removed.

Writing method when using delay:


First line: Address with port

Second line: Key or keyword

Third line: Data value or sending value


Writing method when using custom wait:


First line: Address with port

Second line: Key or keyword

Third line: Data value or sending value

Fourth line: Delay time in seconds (only numbers)


############################################################

Phone Sensor:

In the Phone Sensor section, you can use the sensors inside the phone in soifgo. These sensors work normally, and if you select the active options of these sensors, the program can use the values of these sensors. By enabling the Display Sensor Values option, you can see the values and addresses of these sensors.

Preferably, these sensors are included in the ending addresses 991 to 994 so that buttons can read and display them through these addresses. The application of reading these sensors can lead to button effects. To read the sensors, just set the button behavior to the Bluetooth Receive mode and then enter the sensor address:

Address 991 for the light sensor: You can get the maximum value from the sensor display section by shining a lot of light like the sun.

Address 992 for the X-axis rotation sensor: You can get the maximum value from the sensor display section by rotating the phone until the maximum positive is visible. The sensor value may be decimal and negative. Note that the buttons work from 0 upwards, so by multiplying the number, correct the decimal part and by adding a suitable number, make the negative part positive. For example, if the sensor shows 1.52, this number must be multiplied by 100 to be read as 152. Now, for example, we have a maximum negative of -2.11, which becomes -211. So, multiply by 10 and add 211. Now the sensor's minimum value is 0 and the maximum is 422, and 210 is the balance or median.

Address 993 for the Y-axis rotation sensor: Similar to the explanation above.

Address 994 for the magnetic sensor: Pay attention that the output may vary slightly in different phones. With the help of a coefficient and a magnet, you can find the highest resolution. The type of multiplication and addition is similar to the explanation above.

Now you can have your desired programs such as light measurement, graphs, and movements by selecting button effects. Create programs like a scale or metal detector.

If you want to move a device or toy using the phone's internal rotation sensors, just set the button behavior to Bluetooth Send mode. Then, using the Sensor option, select the desired sensor. The sensor value will be sent to the Bluetooth serial output, and if you wish to have a suffix or address appended to the sent value, just enter that sentence or address inside the textbox.

With sensor value changes, the sensor values will be automatically sent to the Bluetooth serial output. Note that in this feature, the sent number is not negative; it is 0 and above.

Additionally, you can view the sent value on the button itself. This value is only for display purposes and is not sent! You can configure the display options as "Name + Value + Address," "Value + Address + Name," "Value + Address," "Value," or "Name."

Important: In the section for setting the sensor to be sent, configuring another address will not send the value with addresses 991 to 994, because only the sensor value itself is sent. If you enter an address in the textbox, the value will be attached to your address and sent together, with the value first and then the address concatenated.



# 🔌 Real-Time Input Injection into HTML via soifgo


### 🌟 soifgo: Dynamic HTML Interaction Framework

soifgo allows users to connect real-time data sources—like sensors, APIs, or Bluetooth—to dynamic HTML views. Here's how the system works step-by-step:

---

#### ⚙️ Step 1: Configure Input Sources
Within the soifgo interface, the user defines what each button represents:
- **Button 1** might be linked to the phone's light sensor.
- **Button 2** could be set to receive data from Bluetooth.
- And so on up to Button 40.

---

#### 🧩 Step 2: Link HTML Display
In the second section, the user selects a custom HTML layout and enables variable injection.

Once activated, the HTML view opens, showing its original structure. The user can begin editing directly, but **variable injection must follow a precise syntax**:

--- *val1#   Button 1   to   *val40#   Button 40    

#### 📌 Injecting Variables
To insert dynamic data from a button source into HTML:

- Simply type:  
  ```html
  *val1#
  ```
- This refers to **Button 1's value**.

Example before transformation:
```html
<h2>*val1#</h2>
```

After soifgo processes it (either automatically or via your ApplyHTMLVal function):
```html
<h2><span id='*val1#'>*val1#</span></h2>
```

Example before transformation:
```html
<h2>*val1#  *val3#</h2>
```

After soifgo processes it (either automatically or via your ApplyHTMLVal function):
```html
<h2><span id='*val1#'>*val1#</span>  <span id='*val3#'>*val3#</span></h2>
```

This allows JavaScript to interact with it using:
```javascript
function setVal(index, value) {
  var el = document.getElementById('*val' + index + '#');
  if (el) {
    el.innerText = value;
  }
}
```

#### 🎯 Result
- The light sensor value appears dynamically in the HTML without refreshing the page.
- The rest of the interface (e.g. signal generator, controls) **remains intact**, avoiding reinitialization.
- This lets you process, visualize, and manipulate sensor data, all inside HTML—smoothly and live.


