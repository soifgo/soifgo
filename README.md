# soifdesign
Welcome to the SwiftDesign repository, your go-to tool for creating and managing Android UI designs.

# soifdesign
YouTube channel link
https://www.youtube.com/@soifdesign

# soifdesign

soifdesign
Please manually enable 'All File Access' in settings if the app does not run for Android 13 and above.

soifdesign is an adaptable app for creating and managing custom UIs. Features include web views, PDF handling, image viewing, HTML editing, and serial data transmission via Bluetooth. Customizable buttons and startup options enhance user experience.

soifdesign offers object-oriented programmable buttons (40 in total) and 10 sliders with serial Bluetooth transmission capabilities. Create and summon custom menus, build and manage PDF libraries, edit HTML files, and turn them into libraries for further use. soifdesign can send and receive server APIs as well.

Receipts can be displayed in two formats:

Textual

Addressed values, where each address can have a defined maximum value.

This feature allows the creation of various effects on the buttons, including rotation, resizing, moving, color changes, and graphics. For example, you can create a rotating analog needle with input values from 0 to 1000, a graphical thermometer with size change effects, or a balancer with moving effects. You can even create a battery icon that changes color with voltage drop. Remember, to achieve noticeable changes, you should consider minimum input values; for instance, values from 0 to 5 won't show significant effects, but higher values like 0 to 500 or 1000 will. For a complete rotation, at least values from 0 to 360 should be applied, or for proper color changes, remember that color values range up to 255.

soifdesign also supports copy-paste for repetitive tasks. Just create a detailed button and paste its properties to other buttons.

Additionally, soifdesign allows for navigation between created pages. You can create numerous menus and pages, adding sound and vibration to buttons for a pleasant feel. You can share your designs by sharing the text files of the pages. If documents, images, and PDFs are included, it's better to share the related folders as well.

Notes in soifdesign do more than just note-taking. They also serve various tasks such as saving notes, recalling notes, converting to HTML in HTML file editing, and sending commands in serial output in two ways: line by line or with a command line followed by a timer. This enables you to create programmable processes. You can write scenarios as notes and send them to the microcontroller in Note Out to execute your desired operations.

ESP8266 Project

The ESP8266 WiFi module creates a two-way connection between soifdesign and the microcontroller with a local server. If needed, you can extract the package and server files from the server folder and upload them to your online server for a remote online control experience. The source files of the ESP8266 server project are available and unrestricted for you to enhance and improve.

Rangmang Project

Rangmang is a project designed to control RGB LED strips via Bluetooth serial commands using soifdesign. This project allows users to program and control WS2812B LED strips to create stunning lighting effects. soifdesign acts as the interface to send commands to the microcontrollers, enabling dynamic color changes and patterns. The source files of the Rangmang project are available and unrestricted for you to enhance and improve.

To download soifdesign, you can visit the following resources:

GitHub


Example of Sending Commands or Custom Messages to the Serial Terminal in soifdesign
Open soifdesign: Click on the play icon in the top right corner. From the play page, switch to the stop or edit page; the icon will display as a stop symbol. Locate the design icon (a 6-grid icon) in the top right and click on it. Choose the third option to summon a button.

Summon a Button: Click on the button, and now the button design icon will appear. Click on the design icon and choose the sixth option, "Behavior." A light blue label will appear on the page; click on it. Then, select the sixth option, "Note." Choose the initial note "hello" and confirm, so a note appears.

Switch to Play Mode: Now, you can switch from stop to play mode by clicking on the edit icon. Click on the icon whose behavior you set to the note.

Notes Can Be Converted to Output Commands for Bluetooth and Server
To enable this, follow the instructions below:

For Bluetooth Mode:

Ensure Bluetooth sending is enabled in the settings.

When Bluetooth is connected, the "Note Out" or sending icon will be displayed. Long-click on it to access the Bluetooth sending settings.

In Serial Bluetooth Mode: There are two writing modes: dellay

Without Custom Wait:

- Value 1
- Value 2
- Value 3

- Example:

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

- Value
- Timer (in seconds, between 0 to 3600)
- Value
- Timer

- Example:
  
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

Settings:

Delay: Set a delay between 0 to 1000 milliseconds for line-by-line sending.

CR LF or NULL Character: Configure the end character of the sent value as needed.

Auto or Manual Sending: In manual mode, an icon will appear for line-by-line sending.

Check-In: To verify received confirmation. For example, send "123" and if "123" is received, it proceeds to the next line. Otherwise, it repeats a few times and stops if "123" is not received. This is similar to serial echo, ensuring correct receipt.

Next Reception: Sensitive to the word "next" in the reception. Useful when the microcontroller's operation time is unknown. For example, a motor moving a load may take different times to reach the destination based on the load. If a micro switch at the destination sends "next" to the Bluetooth module upon completion, soifdesign will send the next line. Each "next" waits for up to 600 seconds; if exceeded, the program stops.

Custom Wait: Previously mentioned for setting custom stops between lines.

Loop: Enables continuous cyclic operation.

To start sending, click the Note Out icon. For additional settings, long-click on the icon. To stop, you can click "Close" or press the phone's back button.

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

Paste the main file into the page folder of the Android software to display the soifdesign program

!!!!!
Note: If you don't want to keep a computer running as a local server, you can use another ESP8266 module with the first method described but this time using the ESP8266_Server_solo_just_need_power.txt code. Configure this code on another module using Arduino. Note that this module also requires the modem name and password. After uploading the code, the module will announce its MAC address and its own address on each restart. You will need this address for the first module or the reporter connected to the microcontroller. This server module doesn't need anything else except for 3.3 volts to continue operating. Now you can issue your commands in SwiftDesign; the server module will receive them and transfer them to the reporter module. You can network several SwiftDesigns with several reporters, but there will be only one server module

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
GET API
In SwiftDesign, you can easily make GET API requests. To do this, you first need to find the hosting site, obtain the key and address, and then configure the button behavior and server request. Set the address field, filter field, and key field so that in the SwiftDesign run mode, the request is automatically sent, and the result is displayed on the created button. Note that there are two types of responses:

Text Response: Set the filter field to 0. If you have a custom response, you can set this filter between 100 to 999.

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

Graphs in SwiftDesign receive values from the button's behavior on the receiver, whether through Bluetooth, API, or server, and they only accept integers between 0 and 99,999. Graphs work with three schedules: internal, external, and oscilloscope. Each graph can have its own specific address, color, and schedule. Graphs are saved in the SwiftDesign Graph folder with the page folder name and the initial button name at the bottom of the graph, and this process continues until the graph is fully drawn and then saved. If the connection is interrupted, the graphing stops but will resume once reconnected. However, if you exit the program, graphing will not continue, and upon restarting the program, the first page will replace the previously named page. To avoid overwriting, you can take a backup or change the button name so that new files are saved separately from the previous ones. If you have multiple graphs with different names for the same button, don't worry. In the end, in graph review mode, simply change the button name to the corresponding graph name to summon and review that graph.

In graphs, four modes are considered:

Mode One: This mode takes an input value between 0 and 999999 over an internal adjustable scheduling period. At the end of the graph drawing, a folder is created in Swift Design graph with the name of the page. Within this folder, a file named "Button" will be created where each graph is stored in order. If you wish to continue graph recording later, you must be on the last empty page. For example, if you have drawn 5 graphs and wish to continue later, click on the graph and use the page forward icon to go to the end until you see the empty page message. You can then append your new graphs to the previous ones. Note that graphs are not saved until they are completed. Even if they are midway, they are not saved until they reach the end of the button.

Mode Two: Similar to the first mode but without saving the graph. In this mode, you will have zoom functionality where you can zoom in up to 20 times horizontally. Clicking in this mode will freeze the graph on the next page so you can review its quantitative properties. Clicking again will resume graph recording. This mode is suitable for temporary and experimental graphs or oscilloscopes with the phone's internal timer.

Mode Three: Similar to the first mode with saving, but not based on the internal timer. Here, with each input value, we move forward one unit. So, if the input speed is high, the graph will be drawn faster, or you can send data slowly per minute depending on your application.

Mode Four: Similar to the third mode without saving, with zoom functionality. This mode is ideal for creating an oscilloscope or viewing wave samples with zoom and freeze capabilities.

Note: If you exit the program and start graphing again, the first graphing page will be considered as the initial state, and the first page graphing will be deleted, replacing it with subsequent graphs. So, if yesterday's graph is important to you, back it up, or better yet, click on the graph and go to the last empty page to keep the initial graphs intact. Alternatively, you can change the name of the button to have a new series of graphs without altering the previous ones. If you want to see the previous graph, just change the button name back. If you receive a graph folder from a friend, you can also set the button name to match the received graph to view or continue those graphs

With a click on any running graph, a list view (Run/Stop View) will be displayed, and if you are in the non-saving mode, a zoom option will be added

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

## Keywords
- soifdesign
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
- WS2811
- WS2812
- Arduino Bluetooth
- HC-06
- ESP32
- Bluetooth Serial
- WS2812B
- Rangmang
- Bluetooth Serial Communication
-Control RGB LED strips wirelessly.
-Customize buttons to send specific commands
-Dynamic Lighting Effects
-Create and save custom lighting patterns
-Integration with soifdesign
-Seamlessly integrates with soifdesign for enhanced functionality

