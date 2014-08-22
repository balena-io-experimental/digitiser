//digitiser.js
var defaults,settings,parseField;
var request = require('request');
var MAX7219 = require('max7219');

settings = {};
defaults = {
  endpoint: 'https://api.bitcoinaverage.com/ticker/global/GBP/',
  field: 'last',
  interval: 5
};

settings.endpoint = process.env['DIGITISER_ENDPOINT'] || defaults.endpoint;
settings.field = process.env['DIGITISER_VALUE_FIELD'] || defaults.field;
settings.interval = process.env['DIGITISER_INTERVAL'] || defaults.interval

//setup 7-segment display
var disp = new MAX7219("/dev/spidev0.0");
disp.setDecodeAll();
disp.setScanLimit(8);
disp.startup();

//program loop, checks api endpoint every settings.interval seconds.
setInterval(update, settings.interval * 1000)

//##########################################################
//update display
function update() {
    request(settings.endpoint, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var obj = JSON.parse(body)
            var field = parseField(obj, settings.field);
            disp.clearDisplay(function() {
                displayNumber(field, function(){});
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
//parse the field from the api endpoint, allows for nested api endpoints
parseField = function(obj, field) {
  var _i, _len, _ref;
  _ref = field.split('.');
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    field = _ref[_i];
    if ((obj == null) || typeof obj !== 'object') {
      return null;
    }
    obj = obj[field];
  }
  return obj;
};
