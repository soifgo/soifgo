/*
  SoifGo — Robot Controller Example
  Receives FWD / BACK / LEFT / RIGHT / STOP and drives two motors.
*/

#include <SoftwareSerial.h>

SoftwareSerial bluetooth(10, 11);

// Motor driver pins (L298N example)
const byte ENA = 5;  // PWM speed
const byte IN1 = 6;
const byte IN2 = 7;
const byte ENB = 9;
const byte IN3 = 8;
const byte IN4 = 12;

void setup() {
  pinMode(ENA, OUTPUT); pinMode(IN1, OUTPUT); pinMode(IN2, OUTPUT);
  pinMode(ENB, OUTPUT); pinMode(IN3, OUTPUT); pinMode(IN4, OUTPUT);

  Serial.begin(9600);
  bluetooth.begin(9600);
  bluetooth.println("READY");

  analogWrite(ENA, 180);
  analogWrite(ENB, 180);
}

void forward() { digitalWrite(IN1, HIGH); digitalWrite(IN2, LOW); digitalWrite(IN3, HIGH); digitalWrite(IN4, LOW); }
void backward(){ digitalWrite(IN1, LOW);  digitalWrite(IN2, HIGH);digitalWrite(IN3, LOW);  digitalWrite(IN4, HIGH); }
void left()    { digitalWrite(IN1, LOW);  digitalWrite(IN2, HIGH);digitalWrite(IN3, HIGH); digitalWrite(IN4, LOW); }
void right()   { digitalWrite(IN1, HIGH); digitalWrite(IN2, LOW); digitalWrite(IN3, LOW);  digitalWrite(IN4, HIGH); }
void stopAll() { digitalWrite(IN1, LOW);  digitalWrite(IN2, LOW); digitalWrite(IN3, LOW);  digitalWrite(IN4, LOW); }

void loop() {
  if (bluetooth.available()) {
    String cmd = bluetooth.readStringUntil('\n');
    cmd.trim();

    if      (cmd == "FWD")   forward();
    else if (cmd == "BACK")  backward();
    else if (cmd == "LEFT")  left();
    else if (cmd == "RIGHT") right();
    else if (cmd == "STOP")  stopAll();
  }
}