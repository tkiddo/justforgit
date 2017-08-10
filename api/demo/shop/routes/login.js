var express = require('express');
var router = express.Router();
var users = require('../mongodb/user');
router.route('/')
    .post(function(req, res) {
        console.log(req.body)
        users.find({ "userName": req.body.userName, "password": req.body.password }, function(err, user) {
            if (user.length != 0) {
                req.session.loginUser = user[0].userName;
                res.json({ code: 1, msg: "登录成功！", userName: req.body.userName })
            } else {
                res.json({ code: 0, msg: '用户名或者密码错误！' })
            }
        })
    })
    .get(function(req, res) {
        console.log(req.session)
        var sess = req.session;
        var loginUser = sess.loginUser;
        var isLogined = !!loginUser;
        if (isLogined) {
            res.json({ code: 1, msg: 'logined', userName: loginUser })
        } else {
            res.json({ code: 0, msg: 'not logined' })
        }
    })

module.exports = router;