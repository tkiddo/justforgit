var express = require('express');
var app = express();
//处理post参数问题
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json());


app.use(express.static('public'));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.send(200); /*让options请求快速返回*/
    else next();
});

var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/runoob';

var selectData = function(db, callback) {
    //连接到表  
    var collection = db.collection('site');
    collection.find().toArray(function(err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        callback(result);
    });
}

var selectByName = function(db, name, callback) {
    //连接到表  
    var collection = db.collection('site');
    //查询数据
    var whereStr = { "name": name };
    collection.find(whereStr).toArray(function(err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        callback(result);
    });
}

var ObjectId = require('mongodb').ObjectID;
var delData = function(db, id, callback) {
    //连接到表  
    var collection = db.collection('site');
    //删除数据
    var obj_id = ObjectId(id);
    var whereStr = { "_id": obj_id };
    collection.remove(whereStr, { justOne: true }, function(err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        callback(result);
    });
}

var insertData = function(db, data, callback) {
    //连接到表 site
    var collection = db.collection('site');
    //插入数据
    // var data = [{ "name": "菜鸟教程", "url": "www.runoob.com" }, { "name": "菜鸟工具", "url": "c.runoob.com" }];
    collection.insert(data, function(err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        callback(result);
    });
}

var updateData = function(db, id, change, callback) {
    //连接到表  
    var collection = db.collection('site');
    //更新数据
    var obj_id = ObjectId(id);
    var whereStr = { "_id": obj_id };
    var updateStr = { $set: change };
    collection.update(whereStr, updateStr, function(err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        callback(result);
    });
}

app.get('/html/index.html', function(req, res) {
    res.sendFile(__dirname + "/" + "html/index.html");
})

app.get('/html/list.html', function(req, res) {
        res.sendFile(__dirname + "/" + "html/list.html");
    })
    //get 获取列表
app.get('/list', function(req, res) {
    MongoClient.connect(DB_CONN_STR, function(err, db) {
        console.log("连接成功！");
        selectData(db, function(result) {
            console.log(result);
            db.close();
            res.end(JSON.stringify(result))
        });
    });
})

//get 根据name获取
app.get('/list/:name', function(req, res) {
        MongoClient.connect(DB_CONN_STR, function(err, db) {
            console.log("连接成功！");
            var name = req.params.name;
            console.log(name)
            selectByName(db, name, function(result) {
                console.log(result);
                db.close();
                res.end(JSON.stringify(result))
            });
        });
    })
    //delete 删除项目
app.delete('/del', function(req, res) {
    MongoClient.connect(DB_CONN_STR, function(err, db) {
        console.log("连接成功！");
        var id = req.query._id;
        delData(db, id, function(result) {
            console.log(result);
            db.close();
            res.end(JSON.stringify(result))
        });
    });
})

app.post('/add', urlencodedParser, function(req, res) {
    MongoClient.connect(DB_CONN_STR, function(err, db) {
        console.log("连接成功！");
        console.log(req.body)
        var data = {
            name: req.body.name,
            url: req.body.url
        }
        insertData(db, data, function(result) {
            console.log(result);
            db.close();
            res.end(JSON.stringify(result))
        });
    });
})

app.put('/update', function(req, res) {
    MongoClient.connect(DB_CONN_STR, function(err, db) {
        console.log("连接成功！");
        var id = req.query._id;
        var change = {
            name: req.query.newName,
            url: req.query.newUrl
        }
        updateData(db, id, change, function(result) {
            console.log(result);
            db.close();
            res.end(JSON.stringify(result))
        });
    });
})

var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})