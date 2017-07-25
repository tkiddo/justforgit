var express = require("express");
var app = express();

app.use(function(req, res, next) {
    console.log('Time:', Date.now());
    next()
});

app.use('/user/:id', function(req, res, next) {
    console.log('request type:', req.method);
    next()
});

app.get('/user/:id', function(req, res, next) {
    res.send('user')
})

app.listen(3000)