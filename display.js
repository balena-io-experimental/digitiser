var defaults,settings;

defaults = {
  endpoint: 'https://api.bitcoinaverage.com/ticker/global/GBP/',
  field: 'last',
  interval: 5
};

var request = require('request');
//setup 7-segment display
var MAX7219 = require('max7219');
var disp = new MAX7219("/dev/spidev0.0");
disp.setDecodeAll();
disp.setScanLimit(8);
disp.startup();

settings.endpoint = process.env['DIGITISER_ENDPOINT'] || defaults.endpoint;
 settings.field = process.env['DIGITISER_VALUE_FIELD'] || defaults.field;
settings.interval = process.env['DIGITISER_INTERVAL'] || defaults.interval

setInterval(update, settings.interval * 1000)

//##########################################################
//update display
function update() {
    request(settings.endpoint, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Print the google web page.
            disp.clearDisplay(function() {
                displayNumber(body[settings.field], function(){});
            });
        }
    });

}
//push a number object to the display
//TODO: check number is less than 9 digits
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
