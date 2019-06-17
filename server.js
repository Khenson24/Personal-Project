
var express = require('express');
var app = express();
var path = require('path');
var port = process.env.port || 3008;
// viewed at http://localhost:3008
app.use('/',express.static(path.join(__dirname, 'static')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/static/index.html'));
    setInterval(1000)
});

app.listen(port);