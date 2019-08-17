const accountSid = "";
const authToken = "";
const client = require('twilio')(accountSid, authToken);

var methods = {

    sendConfirmationMessage: function(phone, table) {
        client.messages
            .create({
                body: 'Your table number is ' + table,
                from: '+12053031299',
                to: '+'+phone
            })
            .then(message => console.log(message.sid));
    },

    sendReadyMessage: function(phone) {
        client.messages
            .create({
                body: 'Your table is ready to be seated! Please arrive to the front desk.',
                from: '+12053031299',
                to: '+'+phone
            })
            .then(message => console.log(message.sid));
    },
}

exports.data = methods;
