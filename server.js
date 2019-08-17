var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var http = require('http').createServer(app);


var databaseHandler = require('./database_module');
var sendsms = require('./send_sms');


const PORT = process.env.PORT || 3000;


app.use(express.static('public'));
app.use(bodyParser.json());


var tables = {};
var maxNumber = 100;
var alphabet = ['A', 'B', 'C', 'D']

var currentNumber = 0;
var currentAlphabet = 0;


app.post('/queue', function(req, res) {
    var phone = parseInt(req.body.phone);
    var people = parseInt(req.body.people);

    var tableNumber = generateTableNumber();

    databaseHandler.data.createQueueObject(phone, people, tableNumber);
    sendsms.data.sendConfirmationMessage(phone, tableNumber);
    
    res.end("Queue Created");
})


http.listen(PORT, function() {
    console.log(`Server running on port 3000`);
})

function generateTableNumber() {
    if (currentNumber < maxNumber) {
        currentNumber++;
    } else if (currentNumber >= maxNumber) {
        currentNumber = 0;
        currentAlphabet++;
    }
    return alphabet[currentAlphabet] + currentNumber;
}
