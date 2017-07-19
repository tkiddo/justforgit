var mongodb = require('mongodb');
var server = new mongodb.Server('localhost', 27017, { auto_reconnect: true });
var db = new mongodb.Db('mydb', server, { safe: true });
db.open(function(err, db) {
    if (!err) {
        console.log('connect');
    } else {
        console.log(err);
    }

});