#Digitiser for a Web Endpoint

A tool for displaying integer values from a JSON endpoint on a MAX7219 7-segment display.

##Connections

#####7-seg --> RPI
VCC   --> pin 1 (3.3V)  
GND   --> pin 6 (GND)  
DIN   --> pin 19 (SPI_MOSI)  
CS    --> pin 24 (SPI_CE0)  
CLK   --> pin 23 (SPI_SCLK)  

![GPIO pins](/images/GPIO.jpeg)
