var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/products');

var Schema = mongoose.Schema;
var userSchema = new Schema({
    userName: String,
    password: String
})

var User = mongoose.model('user', userSchema);

module.exports = User;