$regfile = "m16adef.dat"
$crystal = 11059200

Config Adc = Single , Prescaler = Auto , Reference = Avcc
Declare Sub Red

CONFIG PORTB=OUTPUT
   Portb = 0
Config Portc.0 = Input                                      'in key 1
Ddrc.0 = 0 : Portc.0 = 1

 Config Portc.1 = Input                                     'in key 2
Ddrc.1 = 0 : Portc.1 = 1

$baud = 115200

Enable Interrupts

 Config Serialin = Buffered , Size = 200 , Bytematch = 13

Dim Text As String * 201
DIM TEMP1 AS WORD
Dim Temp2 As Word
Dim Volt As Word
Dim Volt2 As Single
Dim Step1 As Byte

config watchdog=2048
start watchdog
Main:
reset watchdog


    If Step1 > 7 Then Step1 = 1

      Incr Step1
    Select Case Step1
        Case 1
            Volt = Getadc(0)
            Volt2 = Volt / 204.8
            Print "#volt"; ":"  ; Fusing(Volt2 , "#.##")  ;"*"

        Case 2
            Temp2 = Getadc(1)
            Print  "#temp1" ; ":"   ; Temp1  ;"*"

        Case 3
            Temp1 = Getadc(2)
            Print "#temp2"  ; ":" ;   Temp2  ;"*"

        Case 4
             Print   "#portb" ; ":" ;bin(portb)  ;"*"
        Case 5
            Print  "#pinc"  ; ":" ;  Pinc.0 ; Pinc.1 ;"*"

    End Select



 waitms 500
     Print "#GET:led*"
 waitms 500
Goto Main

Serial0charmatch:
waitms 30
Input Text

if text <> "" then call Red
Return


Sub Red
reset watchdog

Text = Trim(Text)

If Instr(Text , "led:") > 0 Then
   Text = Mid(Text , 6 , 8)
   Portb = Binval(Text)        
End If
        Text = ""

End Sub