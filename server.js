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

var databaseHandler = require('./databasehandler');
var express = require('express');
var app = express();
var http = require('http').createServer(app);

app.use(express.static('public'));

app.post('/queue', function(req, res) {
    console.log(req.query.body);
    var phone = req.query.body.phone;
    var people = req.query.body.people;
    databaseHandler.data.createQueueObject(phone, people);
    res.end("yes");
})

http.listen(3000, function() {
    console.log(`Server running on port 3000`);
})
