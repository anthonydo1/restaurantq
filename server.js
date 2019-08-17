var express = require('express');
var app = express();

app.use(express.static('public'));

app.post('/queue', function(req, res) {
    console.log("received");
    res.end("yes");
})

app.listen(3000, function() {
    console.log(`Server running on port 3000`);
})
