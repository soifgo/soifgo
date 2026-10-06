/*
  SoifGo — LED Blink Example
  Receives "LED_ON" / "LED_OFF" over Bluetooth and controls pin 13.
*/

#include <SoftwareSerial.h>

SoftwareSerial bluetooth(10, 11); // RX, TX
const byte LED_PIN = 13;

void setup() {
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(9600);
  bluetooth.begin(9600);
  bluetooth.println("READY");
}

void loop() {
  if (bluetooth.available()) {
    String cmd = bluetooth.readStringUntil('\n');
    cmd.trim();

    if (cmd == "LED_ON") {
      digitalWrite(LED_PIN, HIGH);
      bluetooth.println("LED:ON");
    }
    else if (cmd == "LED_OFF") {
      digitalWrite(LED_PIN, LOW);
      bluetooth.println("LED:OFF");
    }
  }
}