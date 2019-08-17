const accountSid = 'AC6601e11e9fedf512b68a3436a9f33867';
const authToken = 'b38bbb1fa4c750bc299bfd4620f37ec4';
const client = require('twilio')(accountSid, authToken);

var methods = {

    sendConfirmationMessage: function(phone) {
        client.messages
            .create({
                body: 'Your table number is A3',
                from: '+12053031299',
                to: phone
            })
            .then(message => console.log(message.sid));
    },

    sendReadyMessage: function(phone) {
        client.messages
            .create({
                body: 'Your table is ready to be seated! Please arrive to the front desk.',
                from: '+12053031299',
                to: phone
            })
            .then(message => console.log(message.sid));
    },
}

exports.data = methods;
