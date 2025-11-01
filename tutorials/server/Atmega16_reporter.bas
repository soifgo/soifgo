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

Dim Text As String * 40
DIM TEMP1,LastTemp1 AS WORD
Dim Temp2,LastTemp2 As Word
Dim Volt As Word
Dim Volt2,LastVolt2 As Single
Dim Step1 As Byte
dim ok as byte

dim pc,lastpc,pb,lastpb as byte
config watchdog=2048
start watchdog

Main:
waitms 30
  Incr Step1

reset watchdog

    If Step1 >11 Then Step1 = 1


    Select Case Step1

        Case 1

            Volt = Getadc(0)
            Volt2 = Volt / 204.8
            If Volt2 <> LastVolt2 Then
                        Print "#volt:" ; Fusing(Volt2 , "#.##") ; "*"
                      LastVolt2 = Volt2
               End If
        Case 2
            Temp1 = Getadc(1)
            If Temp1 <> LastTemp1 Then
            Print  "#temp1" ; ":"   ; Temp1  ;"*"
               End If
        Case 3
            Temp2 = Getadc(2)
             If Temp2 <> LastTemp2 Then
            Print "#temp2"  ; ":" ;   Temp2  ;"*"
               End If
        Case 4
           pb=portb
                 If pb <> Lastpb Then
             Print   "#portb" ; ":" ;bin(portb)  ;"*"
             lastpb=pb
               End If
        Case 5
                   pc=portc
                 If pc <> Lastpc Then
            Print  "#pinc"  ; ":" ;  Pinc.0 ; Pinc.1 ;"*"
             lastpc=pc
               End If

               case 6
                Print "#GET:led*"
               case 9
              if ok=0 then  Print "#GET:led*"
              ok=0
    End Select




Goto Main

Serial0charmatch:
 waitms 20
Input Text

if text <> "" then call Red
Return


Sub Red
reset watchdog

Text = Trim(Text)
If Instr(Text , "led:") > 0 Then
   Text = Mid(Text , 6 , 8)
   Portb = Binval(Text)
 ok=1
End If



        Text = ""

End Sub