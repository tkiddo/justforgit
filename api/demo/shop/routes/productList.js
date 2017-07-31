var express = require('express');
var router = express.Router();
var mongo = require('../mongodb/mongo'); //product-model

//get 获取商品列表
router.get('/', function(req, res) {
    mongo.find({}, function(err, pros) {
        res.end(JSON.stringify(pros))
    })
});
//get 获取指定商品
router.get('/getSearch', function(req, res) {
        var re = new RegExp(".*" + req.query.name + ".*");
        var querystr = { 'name': re };
        mongo.find(querystr, function(err, pros) {
            res.end(JSON.stringify(pros))
        })
    })
    //处理post参数
    // 创建 application/x-www-form-urlencoded 编码解析
var bodyParser = require('body-parser');
var parseData = bodyParser.urlencoded({ extended: false });
//post 添加商品
router.post('/addProduct', parseData, function(req, res) {
    var isLogined = loginCheck(req);
    if (isLogined) {
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
        mongo.create(newProduct, function(err, docs) {
            if (err) {
                console.log(err)
                res.json({ code: 2, msg: '商品添加失败！' })
            } else {
                console.log("new product saved");
                res.json({ code: 1, msg: '商品添加成功！' })
            }
        })
    } else {
        res.json({ code: 0, msg: '请先登录！' })
    }
})

router.post('/delProduct', parseData, function(req, res) {
    var isLogined = loginCheck(req);
    if (isLogined) {
        var idArr = req.body.idArr;
        console.log(idArr)
        mongo.remove({ "_id": { $in: idArr } }, function(err, result) {
            if (err) {
                console.log(err);
                res.json({ code: 2, msg: "删除失败！" })
            } else {
                console.log('deleted')
                res.json({ code: 1, msg: "删除成功！" })
            }
        });


    } else {
        res.json({ code: 0, msg: '请先登录！' })
    }
})

router.put('/update', parseData, function(req, res) {
        var isLogined = loginCheck(req);
        if (isLogined) {
            var newData = req.body;
            mongo.update({ "_id": newData._id }, newData, function(err, docs) {
                if (err) {
                    res.json({ code: 2, msg: '更新失败' })
                } else {
                    res.json({ code: 1, msg: "更新成功" })
                }
            })
        } else {
            res.json({ code: 0, msg: '请先登录' })
        }
    })
    //登录检测
function loginCheck(req) {
    var loginUser = req.session.loginUser;
    var isLogined = !!loginUser;
    return isLogined;
}

module.exports = router;