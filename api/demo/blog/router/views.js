var express = require('express');
var router = express.Router();
var path = require('path');
var { userModel, blogModel } = require('../mongodb/index');

router.get('/', (req, res) => {
    res.render('index', { title: 'signup' });
    // res.sendFile('F:/gitfile/api/demo/blog/views/index.html')
})

router.get('/login', (req, res) => {
    res.render('login', { title: 'login' })
})

router.get('/blog', (req, res) => {
    var user = req.session.userName;
    blogModel.find({}, (err, docs) => {
        if (err) return err;
        res.render('blog', { title: 'blog', list: docs, user: user })
    })
})

module.exports = router;