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
var List = [{
    name: 'cell Phone',
    description: 'mobile phone ',
    price: 1220,
    countInHold: 100,
    countSaled: 200,
    imgPath: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png',
    store: 'apple',
    date: '2015-11-23'
}, {
    name: 'ak47',
    description: 'gun ',
    price: 582,
    countInHold: 59,
    countSaled: 46,
    imgPath: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png',
    store: 'ak',
    date: '2013-01-23'
}, {
    name: 'earplug',
    description: 'listening',
    price: 469,
    countInHold: 152,
    countSaled: 36,
    imgPath: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png',
    store: 'ear',
    date: '2011-04-25'
}, {
    name: 'car',
    description: 'a car',
    price: 5869,
    countInHold: 457,
    countSaled: 11,
    imgPath: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png',
    store: 'castle',
    date: '2012-09-23'
}, {
    name: 'pencil',
    description: 'studying',
    price: 11,
    countInHold: 452,
    countSaled: 63,
    imgPath: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png',
    store: 'pen',
    date: '2015-11-23'
}, {
    name: 'cell cell',
    description: 'celling box',
    price: 152,
    countInHold: 486,
    countSaled: 985,
    imgPath: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png',
    store: '152',
    date: '2013-03-25'
}, {
    name: 'fdsfd',
    description: 'ersfew ',
    price: 120,
    countInHold: 140,
    countSaled: 800,
    imgPath: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png',
    store: 'erda',
    date: '2015-11-23'
}, {
    name: '1526',
    description: 'mobile phone ',
    price: 652,
    countInHold: 8,
    countSaled: 52,
    imgPath: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png',
    store: 'star',
    date: '2016-11-23'
}, {
    name: 'cell star',
    description: 'star phone ',
    price: 58,
    countInHold: 15,
    countSaled: 36,
    imgPath: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png',
    store: 'sss',
    date: '2015-11-23'
}, {
    name: 'star Phone',
    description: 'mobile star ',
    price: 25,
    countInHold: 36,
    countSaled: 15,
    imgPath: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png',
    store: 'ssdd',
    date: '2015-11-23'
}, {
    name: 'ssd Phone',
    description: 'ssd dssd ',
    price: 152,
    countInHold: 5,
    countSaled: 362,
    imgPath: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png',
    store: 'ssrde',
    date: '2015-11-23'
}, ];


for (var i = 0; i < List.length; i++) {
    var item = List[i];
    var product = new Product({
        name: item.name,
        description: item.description,
        price: item.price,
        countInHold: item.countInHold,
        countSaled: item.countSaled,
        imgPath: item.imgPath,
        store: item.store,
        date: item.date
    });
    product.save(function(err) {
        if (err) {
            console.log('save error');
            return;
        } else {
            console.log('saved')
        }
    })
}