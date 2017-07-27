var express = require('express');
var router = express.Router();
var mongo = require('../mongodb/mongo');

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

module.exports = router;