//require the Twilio module and create a REST client
var client = require('twilio')('ACc95b434d7cfade67d29870f25d350e79', 'f0108e5a49dcf1feb267e4a311a16037');

//Place a phone call, and respond with TwiML instructions from the given URL
client.makeCall({

    to: '17039193303', //'+18476443169', // Any number Twilio can deliver to
    from: '+12407248522', // A number you bought from Twilio and can use for outbound communication
    url: 'https://s3.amazonaws.com/nearhan/say.xml?X-Amz-Date=20151024T154546Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=7b30b6dd57c93a5131f5cc0fe3e49cd685791ad653fc5079b801cd197d9aa8af&X-Amz-Credential=ASIAI5AEHISENVXVTUOQ/20151024/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEBkakAIE2ylHeQPx9Orgc5TqRfoqgG6dQRTS5Dc81hh71ULeu7I8Q7CypaCpw5xPX/Nzj4fhnC56t0TeVhp5CKhAyys6Q1Ks8v7ps7O8hl0f4W4vctEGAcQRFt33AJb2sxE3mGfF%2B1VqRLbfXXu4JdjQQ%2ByWV6/I9EOfArO6yJwQ8ou7r/5cMkODVfRByutRSAKefKDksuDuG1IaNGubV4rXAgt/5%2BFpKhVsPqu71guTfSy2NdIC2n3x%2B0Za%2BP6qdmfLOykYeQPBUMtolyKecsgTUsIoS3kGtf9VTvg2deW0l49xF4MCNq%2Bgr7hb8gFFvBN1llxhloEk9N3imMunmz5yaDNyTyQjhyXLkRQsLBdVKOPRoiCuxK6xBQ%3D%3D'

}, function(err, responseData) {
    if (err) console.log(err)

    //executed when the call has been initiated.
    console.log(responseData.from); // outputs "+14506667788"

});
