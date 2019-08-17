var methods = {
    createQueueObject: function(phone, people) {
        var db = firebase.database().ref("queue");
        db.push({
            phone: phone,
            people: people
        })
    },

    deleteQueueObject: function(key) {
        var db = firebase.database().ref("items");
        db.child(key).remove();
    },

    createReadyObject: function(phone, people) {
        var db = firebase.database().ref("ready");
        db.push({
            phone: phone, 
            people: people
        })
    },

    deleteReadyObject: function(key) {
        var db = firebase.database().ref("items");
        db.child(key).remove();
    }
};


exports.data = methods;