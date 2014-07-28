//#######################################
var MAX7219 = require('max7219');
var disp = new MAX7219("/dev/spidev0.0");
disp.setDecodeAll();
disp.setScanLimit(8);
disp.startup();
disp.clearDisplay(function() {
    displayNumber(1.2, function(){});
});

function displayNumber(number,callback) {
    sNumber = number.toString();

    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        var digit = len-1-i;
        if (sNumber[digit] == '.'){
            disp.setDigitSymbol(i, sNumber[digit-1],true);
            len = len-1;

        }else{
            disp.setDigitSymbol(i, sNumber[digit]);
        }
}
    callback();
}
