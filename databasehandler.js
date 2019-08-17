var firebase = require("firebase/app");
require('firebase/database');

var firebaseConfig = {
    apiKey: "AIzaSyDHZXXqo5s6NPeoN7Z-IcCXCDqdrHSEhpM",
    authDomain: "resturantqueue.firebaseapp.com",
    databaseURL: "https://resturantqueue.firebaseio.com",
    projectId: "resturantqueue",
    storageBucket: "resturantqueue.appspot.com",
    messagingSenderId: "850406156828",
    appId: "1:850406156828:web:ed224801057c0944"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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