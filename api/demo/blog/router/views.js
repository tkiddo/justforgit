var express = require('express');
var router = express.Router();
var path = require('path')

router.get('/', (req, res) => {
    res.render('index');
    // res.sendFile('F:/gitfile/api/demo/blog/views/index.html')
})

module.exports = router;