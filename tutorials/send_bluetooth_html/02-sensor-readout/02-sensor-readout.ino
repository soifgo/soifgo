/*
  SoifGo — Sensor Readout Example
  Reads A0 and sends the value when it receives "GET_DATA".
*/

#include <SoftwareSerial.h>

SoftwareSerial bluetooth(10, 11);
const byte SENSOR_PIN = A0;

void setup() {
  Serial.begin(9600);
  bluetooth.begin(9600);
  bluetooth.println("READY");
}

void loop() {
  if (bluetooth.available()) {
    String cmd = bluetooth.readStringUntil('\n');
    cmd.trim();

    if (cmd == "GET_DATA") {
      int val = analogRead(SENSOR_PIN);
      bluetooth.print("SENSOR:");
      bluetooth.println(val);
    }
  }
}