//#######################################
var MAX7219 = require('max7219');

var disp = new MAX7219("/dev/spidev0.0");
disp.setDecodeAll();
disp.setScanLimit(8);
disp.startup();
disp.setDigitSymbol(0, "H");
disp.setDigitSymbol(1, "E");
disp.setDigitSymbol(2, "L");
disp.setDigitSymbol(3, "P");
