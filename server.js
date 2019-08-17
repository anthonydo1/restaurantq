var databaseHandler = require('./database_module');
var sendsms = require('./send_sms');
var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var http = require('http').createServer(app);


app.use(express.static('public'));
app.use(bodyParser.json());


app.post('/queue', function(req, res) {
    var phone = req.body.phone;
    var people = req.body.people;

    databaseHandler.data.createQueueObject(phone, people);
    res.end();
})


http.listen(3000, function() {
    console.log(`Server running on port 3000`);
})
