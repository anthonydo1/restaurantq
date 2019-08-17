var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var http = require('http').createServer(app);

var databaseHandler = require('./database_module');
var sendsms = require('./send_sms');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());


app.post('/queue', function(req, res) {
    var phone = req.body.phone;
    var people = req.body.people;

    databaseHandler.data.createQueueObject(phone, people).then(key => {
        sendsms.data.sendConfirmationMessage(phone, key);
    })
    res.end("Queue Created");
})


http.listen(PORT, function() {
    console.log(`Server running on port 3000`);
})
