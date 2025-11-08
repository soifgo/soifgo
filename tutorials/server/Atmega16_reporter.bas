$regfile = "m16adef.dat"
$crystal = 11059200

Config Adc = Single , Prescaler = Auto , Reference = Avcc
Config Timer1 = Pwm , Pwm = 10 , Compare_a_pwm = Clear_up , Compare_b_pwm = Clear_up , Prescale = 1
Declare Sub Red

CONFIG PORTB=OUTPUT
   Portb = 0
Config Portc.0 = Input                                      'in key 1
Ddrc.0 = 0 : Portc.0 = 1

 Config Portc.1 = Input                                     'in key 2
Ddrc.1 = 0 : Portc.1 = 1

$baud = 115200

Enable Interrupts

 Config Serialin = Buffered , Size = 41 , Bytematch = 13

Dim Text As String * 40
Dim Text2 As String * 4
Dim Text3 As String * 5
DIM TEMP1,LastTemp1 AS WORD
Dim Temp2,LastTemp2 As Word
Dim Volt,pwm1aa As Word
Dim Volt2,LastVolt2 As Single
Dim Step1 As Byte
dim p,t1,i as byte
dim t2 as bit
dim pc,lastpc,pb,lastpb as byte
config watchdog=2048
start watchdog
 Readeeprom portb , 1
  Waitms 1
  Readeeprom pwm1aa , 3
  Waitms 1
  Open "comd.6:9600,8,n,1" For Output As #1

  Print #1 , "soifgo"
pwm1a=pwm1aa
Main:
waitms 30
  Incr Step1

reset watchdog

    If Step1 >8 Then Step1 = 1


    Select Case Step1

        Case 1

            Volt = Getadc(0)
            Volt2 = Volt / 204.8
               If Volt2 <> Lastvolt2 Then
                   Print "#volt:" ; Fusing(volt2 , "#.##") ; "*"
                   Lastvolt2 = Volt2
               End If
        Case 2
              Temp1 = Getadc(1)
               If Temp1 <> Lasttemp1 Then
                   Print "#temp1" ; ":" ; Temp1 ; "*"
                   Lasttemp1 = Temp1
               End If
        Case 3
            Temp2 = Getadc(2)
               If Temp2 <> Lasttemp2 Then
                   Print "#temp2" ; ":" ; Temp2 ; "*"
                   Lasttemp2 = Temp2
               End If
        Case 4
           Pb = Portb
               If Pb <> Lastpb Then
                  Print "#portb" ; ":" ; Bin(portb) ; "*"
                  Lastpb = Pb
               End If
        Case 5
                 Pc = Portc
               If Pc <> Lastpc Then
                  Print "#pinc" ; ":" ; Pinc.0 ; Pinc.1 ; "*"
                  Lastpc = Pc
               End If

               case 6
               incr p
               if p>7 then p=0
                Print "#GET:port";p;"*"
    End Select




Goto Main

Serial0charmatch:
 waitms 20
Input Text

if text <> "" then call Red
Return


Sub Red
  Reset Watchdog

  Text = Trim(text)
  Text = Ltrim(text)

  'Print #1 , ">";Text;"<"
      If Instr(text , "rang") > 0 Then
      Disable Interrupts
       Print #1 , Mid(text , 6 , 28)
        Enable Interrupts
       End If

   If Instr(text , "pwm1a") > 0 Then
      Text3 = Mid(text , 7 , 4)
      Pwm1a = Val(text3)
      Writeeeprom pwm1a , 3
   End If

  If Instr(text , "port") > 0 Then
     Text2 = Mid(Text , 7 , 1)
     Text = Mid(text , 5 , 1)


      if text2="0" then t2=0
      if text2="1" then t2=1

      t1=val(text)

      If T1 < 8 Then Portb.t1 = T2

   If T1 = 9 Then

          if t2=1 then
            Portb = 255
             For I = 0 To 7
              Print "#port" ; I ; ":1*"
              Waitms 50
             Next
          End If

        if t2=0 then
          portb=0
          for i=0 to 7
           Print  "#port";i ; ":0*"
           waitms 50
          next
        end if


   end if
    Writeeeprom Portb , 1

  End If

   Text = ""
   Text2 = ""
   Text3 = ""
   T1 = 222
   T2 = 0
   Clear Serialin


End Sub