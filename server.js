var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/', function(req, res) {
    console.log("post request received")
})

var server = app.listen(3000, function() {
    
})
