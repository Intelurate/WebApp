var twilio = require('twilio');
var rando = require('random-number-in-range');
var num = rando(10000, 99999);

var accountSid = 'AC9fa9839e7a6243a3e969ae9cfd46fca2'; // Your Account SID from www.twilio.com/console
var authToken = '8b1f5fbf7542181ceebdc92d5f13065a';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: num,
    to: '+19544944482',  // Text this number
    from: '+15616178113' // From a valid Twilio number
})
.then((message) => console.log(message.sid))
.catch(err => console.log(err));