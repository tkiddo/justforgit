var express = require('express');
var router = express.Router();
router.route('/')
    .get(function(req, res) {
        req.session.loginUser = null;
        res.json({ msg: 'logout successed' })
    })

module.exports = router;