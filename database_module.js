var admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://resturantqueue.firebaseio.com',
    databaseAuthVariableOverride: {
        uid: "my-admin-server"
    }
});

var methods = {
    createQueueObject: function(phone, people, table) {
        var db = admin.database().ref("queue");
        db.push({
            phone: phone,
            people: people,
            table: table
        })
    },

    deleteQueueObject: function(key) {
        var db = admin.database().ref("items");
        db.child(key).remove();
    },

    createReadyObject: function(phone, people, table) {
        var db = admin.database().ref("ready");
        db.push({
            phone: phone, 
            people: people,
            table: table
        })
    },

    deleteReadyObject: function(key) {
        var db = admin.database().ref("items");
        db.child(key).remove();
    }
};


exports.data = methods;