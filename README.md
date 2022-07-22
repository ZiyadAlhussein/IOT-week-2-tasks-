# IOT-week-2-tasks-
**Task 2: ESP32 Operation in Arduino**

**1. Download Arduino IDE: https://www.arduino.cc/en/software**

![image](https://user-images.githubusercontent.com/108147030/180517113-b663dc45-c68a-48ae-8201-a49c10ac0c2c.png)

**2. install the ESP32 board in your Arduino IDE**
 
 1) Download ESP32 driver then plug the board to your PC by USB: https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers
 
    ![image](https://user-images.githubusercontent.com/108147030/180518719-b5da7c68-d180-47a3-aa46-c9de34891fe2.png)

 2) In your Arduino IDE, go to File> Preferences
 
 ![image](https://user-images.githubusercontent.com/108147030/180517889-e1453035-4255-433e-bfe5-3dde82e9b6bf.png)
 
 3) Enter the following into the “Additional Board Manager URLs” field, Then click the “OK” button:
 
   ```ruby
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
  ```
  ![image](https://user-images.githubusercontent.com/108147030/180518050-1ee10a31-e4e8-4de0-afaa-4805f42f9684.png)
 
 4) Open the Boards Manager. Go to Tools > Board > Boards Manager…

  ![image](https://user-images.githubusercontent.com/108147030/180518119-6722cdb8-31ef-48ad-a6a3-a8f9d9112ed4.png)
  
 5) Search for ESP32 and press install button for the “ESP32 by Espressif Systems“:

  ![image](https://user-images.githubusercontent.com/108147030/180518276-752296e2-2c9e-4fb6-bbbd-83f9ad0f1538.png)
 
 6) Select your Board in Tools > Board menu (WEMOS D1 MINI ESP32)
 
![image](https://user-images.githubusercontent.com/108147030/180518389-d6dc01c2-9a9f-4125-9553-324b3debe416.png)
 


**3. Operation 1: Controlling LED light in ESP32 board**

Upload the following code to control the LED lights in the ESP32 board:

 ```ruby
// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(2000);                       // wait for 2 second
  digitalWrite(LED_BUILTIN, LOW);    // turn the LED off by making the voltage LOW
  delay(2000);                       // wait for 2 second
}
  ```
**4. Operation 2: Wifi hotspot with ESP32 board**
Upload the following code to turn ESP32 board into a wifi hotspot, with SSID: ESP32WIFI and Passward: 123456789.

After connecting to the server the following message would be displayed: "hello from esp32!"

 ```ruby
#include <WiFi.h>
#include <WiFiClient.h>
#include <WebServer.h>
#include <ESPmDNS.h>

const char* ssid = "ESP32WIFI";
const char* password = "123456789";

WebServer server(80);

const int led = 13;

void handleRoot() {
  digitalWrite(led, 1);
  server.send(200, "text/plain", "hello from esp32!");
  digitalWrite(led, 0);
}

void handleNotFound() {
  digitalWrite(led, 1);
  String message = "File Not Found\n\n";
  message += "URI: ";
  message += server.uri();
  message += "\nMethod: ";
  message += (server.method() == HTTP_GET) ? "GET" : "POST";
  message += "\nArguments: ";
  message += server.args();
  message += "\n";
  for (uint8_t i = 0; i < server.args(); i++) {
    message += " " + server.argName(i) + ": " + server.arg(i) + "\n";
  }
  server.send(404, "text/plain", message);
  digitalWrite(led, 0);
}

void setup(void) {
  pinMode(led, OUTPUT);
  digitalWrite(led, 0);
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.println("");

  // Wait for connection
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  if (MDNS.begin("esp32")) {
    Serial.println("MDNS responder started");
  }

  server.on("/", handleRoot);

  server.on("/inline", []() {
    server.send(200, "text/plain", "this works as well");
  });

  server.onNotFound(handleNotFound);

  server.begin();
  Serial.println("HTTP server started");
}

void loop(void) {
  server.handleClient();
  delay(2);//allow the cpu to switch to other tasks
}
  ```

