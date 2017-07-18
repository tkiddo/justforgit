var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('hello world')
})

var server = app.listen(8090, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("listen on:http://%s:%s", host, port)
})