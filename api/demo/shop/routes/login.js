var express = require('express');
var router = express.Router();
var users = require('../mongodb/user');
router.route('/')
    .post(function(req, res) {
        console.log(req.body)
        users.find({ "userName": req.body.userName, "password": req.body.password }, function(err, user) {
            if (user.length != 0) {
                req.session.loginUser = user[0].userName;
                res.json({ ret_code: 0, ret_msg: "login successed" })
            } else {
                res.json({ ret_code: 1, ret_msg: 'wrong name or password' })
            }
        })
    })
    .get(function(req, res) {
        console.log(req.session)
        var sess = req.session;
        var loginUser = sess.loginUser;
        var isLogined = !!loginUser;
        if (isLogined) {
            res.json({ msg: 'logined', userName: loginUser })
        } else {
            res.json({ msg: 'not logined' })
        }
    })

module.exports = router;