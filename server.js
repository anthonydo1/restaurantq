var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

app.post('/queue', function(req, res) {
    console.log("received");
    res.end("yes");
})

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});

http.listen(3000, function() {
    console.log(`Server running on port 3000`);
})
