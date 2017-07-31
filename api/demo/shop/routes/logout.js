var express = require('express');
var router = express.Router();
router.route('/')
    .get(function(req, res) {
        req.session.loginUser = null;
        res.json({ code: 1, msg: '登出成功！' })
    })

module.exports = router;