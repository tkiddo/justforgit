var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'runoob');

db.on('error', console.error.bind(console, 'connect error'));

db.once('open', function() {
    var Schema = new mongoose.Schema({
        name: String
    });
    var Model = db.model('Site', Schema, 'site');
    var Entity = new Model({ name: 'wwwwwww' });

    Model.find(function(err, site) {
        for (var i = 0; i < site.length; i++) {
            console.log(site[i])
        }
    })
})