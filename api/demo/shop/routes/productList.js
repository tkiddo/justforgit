var express = require('express');
var router = express.Router();
var mongo = require('../mongodb/mongo'); //product-model

//get 获取商品列表
router.get('/', function(req, res) {
    mongo.find({}, ['name', 'price', 'date', 'store'], function(err, pros) {
        res.end(JSON.stringify(pros))
    })
});
//get 获取指定商品
router.get('/getDetail', function(req, res) {
        var re = new RegExp(".*" + req.query.name + ".*");
        var querystr = { 'name': re };
        mongo.find(querystr, ['name'], function(err, pros) {
            res.end(JSON.stringify(pros))
        })
    })
    //处理post参数
    // 创建 application/x-www-form-urlencoded 编码解析
var bodyParser = require('body-parser');
var parseData = bodyParser.urlencoded({ extended: false });
//post 添加商品
router.post('/addProduct', parseData, function(req, res) {
    console.log(req.body)
    var item = req.body;
    var newProduct = {
        name: item.name,
        description: item.description,
        price: item.price,
        countInHold: item.countInHold,
        countSaled: item.countSaled,
        imgPath: item.imgPath,
        store: item.store,
        date: item.date
    };
    mongo.create(newProduct, function(err) {
        if (err) {
            console.log("save error")
        } else {
            console.log("new product saved");
            res.end('new product saved')
        }
    })

})

module.exports = router;