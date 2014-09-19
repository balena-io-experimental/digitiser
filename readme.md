#Digitiser for a Web Endpoint

Digitiser is a resin.io powered application that displays the number of currently connected devices on resin.io using a 8 digit 7-segment display.

##Connections

#####7-seg --> RPI
VCC   --> pin 1 (3.3V)  
GND   --> pin 6 (GND)  
DIN   --> pin 19 (SPI_MOSI)  
CS    --> pin 24 (SPI_CE0)  
CLK   --> pin 23 (SPI_SCLK)  

![GPIO pins](/images/GPIO.jpeg)
