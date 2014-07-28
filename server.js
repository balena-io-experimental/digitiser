//#######################################
//tty.js terminal stuff
var tty = require('tty.js');
// Simple tty.js in app mode
var app = tty.createServer({
  shell: 'bash',
  users: {
    admin: 'admin'
  },
  port: process.env.PORT || '8080'
});

app.listen();
//#######################################
// var MAX7219 = require('max7219');

// var disp = new MAX7219("/dev/spidev1.0");
// disp.setDecodeAll();
// disp.setScanLimit(8);
// disp.startup();
// disp.setDigitSymbol(0, "H");
// disp.setDigitSymbol(1, "E");
// disp.setDigitSymbol(2, "L");
// disp.setDigitSymbol(3, "P");
