/*
  SoifGo — Speed Control  for TDA7073A (Software PWM)
 
  Target: Arduino Uno R3 (ATmega328P)
*/

// ============================================
// PIN CONFIGURATIONS (same as Bascom)
// ============================================
const byte M11 = A2;  // PORTC.2
const byte M12 = A3;  // PORTC.3
const byte M21 = A4;  // PORTC.4
const byte M22 = A5;  // PORTC.5

// ============================================
// VARIABLES
// ============================================
bool dir1 = false;
bool dir2 = false;
bool stopm1 = true;
bool stopm2 = true;

byte spd1 = 0;
byte spd2 = 0;
byte pw1 = 55;
byte pw2 = 55;

String text = "";
String text2 = "";

// ============================================
// SETUP
// ============================================
void setup() {
  pinMode(M11, OUTPUT);
  pinMode(M12, OUTPUT);
  pinMode(M21, OUTPUT);
  pinMode(M22, OUTPUT);

  // All motors stopped initially
  digitalWrite(M11, LOW);
  digitalWrite(M12, LOW);
  digitalWrite(M21, LOW);
  digitalWrite(M22, LOW);

  Serial.begin(9600);
}

// ============================================
// SOFTWARE PWM LOOP
// ============================================
void loop() {
  // ---- Motor 1 (A) ----
  if (!stopm1) {
    spd1++;
    if (pw1 > spd1) {
      if (!dir1) {
        digitalWrite(M11, HIGH);
        digitalWrite(M12, LOW);
      } else {
        digitalWrite(M11, LOW);
        digitalWrite(M12, HIGH);
      }
    } else {
      digitalWrite(M11, LOW);
      digitalWrite(M12, LOW);
    }
  } else {
    digitalWrite(M11, LOW);
    digitalWrite(M12, LOW);
  }

  // ---- Motor 2 (B) ----
  if (!stopm2) {
    spd2++;
    if (pw2 > spd2) {
      if (!dir2) {
        digitalWrite(M21, HIGH);
        digitalWrite(M22, LOW);
      } else {
        digitalWrite(M21, LOW);
        digitalWrite(M22, HIGH);
      }
    } else {
      digitalWrite(M21, LOW);
      digitalWrite(M22, LOW);
    }
  } else {
    digitalWrite(M21, LOW);
    digitalWrite(M22, LOW);
  }

  // ---- Serial parse ----
  if (Serial.available()) {
    char c = Serial.read();
    if (c == '\r' || c == '\n') {
      if (text.length() > 1) {
        parseSerial();
      }
      text = "";
    } else {
      text += c;
    }
  }
}

// ============================================
// PARSE SERIAL
// ============================================
void parseSerial() {
  if (text.indexOf("FWD") >= 0) {
    dir1 = true;
    stopm1 = false;
  }
  if (text.indexOf("BACK") >= 0) {
    dir1 = false;
    stopm1 = false;
  }
  if (text.indexOf("LEFT") >= 0) {
    dir2 = true;
    stopm2 = false;
  }
  if (text.indexOf("RIGHT") >= 0) {
    dir2 = false;
    stopm2 = false;
  }
  if (text.indexOf("STOP") >= 0) {
    stopm1 = true;
    stopm2 = true;
  }
  if (text.indexOf("SPD_A:") >= 0) {
    text2 = text.substring(6, 9);
    pw1 = text2.toInt();
  }
  if (text.indexOf("SPD_B:") >= 0) {
    text2 = text.substring(6, 9);
    pw2 = text2.toInt();
  }

  Serial.print(pw1);
  Serial.print("   ");
  Serial.println(pw2);

  text = "";
  text2 = "";
}