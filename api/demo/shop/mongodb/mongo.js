var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/products');

var Schema = mongoose.Schema;
var productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    countInHold: Number,
    countSaled: Number,
    imgPath: String,
    date: String,
    store: String
})

var Product = mongoose.model('Product', productSchema);

module.exports = Product;