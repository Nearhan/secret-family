//require the Twilio module and create a REST client
var client = require('twilio')('ACc95b434d7cfade67d29870f25d350e79', 'f0108e5a49dcf1feb267e4a311a16037');

//Place a phone call, and respond with TwiML instructions from the given URL
client.makeCall({

    to: '+18476443169', // Any number Twilio can deliver to
    from: '+12407248522', // A number you bought from Twilio and can use for outbound communication
    url: 'https://dl.dropboxusercontent.com/u/1901813/say.xml'

}, function(err, responseData) {
    if (err) console.log(err)

    //executed when the call has been initiated.
    console.log(responseData.from); // outputs "+14506667788"

});
