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
    var username = req.session.username;
    var pagesize = 10;
    var currentpage = req.query.page;
    // blogModel.find({ username: username }, (err, docs) => {
    //     if (err) return err;
    //     res.render('blog', { title: 'blog', list: docs, username: username })
    // });
    blogModel.find({}).sort({ "_id": -1 }).exec((err, docs) => {
        if (err) return err;
        // console.log(docs)
        var totalpage = Math.ceil(docs.length / pagesize);
        var list = [];
        for (var i = pagesize * (currentpage - 1); i < pagesize * currentpage; i++) {
            if (docs[i]) {
                list.push(docs[i])
            }
        }
        console.log(list)
        res.render('blog', { title: 'blog', list: list, username: username, totalpage: totalpage, currentpage: currentpage })
    })
})

router.get('/addblog', (req, res) => {
    var username = req.session.username;
    if (username) {
        res.render('addblog', { title: 'addblog', username: username })
    }
})

router.get('/editblog', (req, res) => {
    var username = req.session.username;
    if (username) {
        blogModel.find({ "_id": req.query._id }, (err, doc) => {
            res.render('editblog', { title: 'editblog', username: username, result: doc[0] })
        })

    }
})

router.get('/blogdetail', (req, res) => {
    blogModel.find({ "_id": req.query._id }, (err, doc) => {
        res.render('blogdetail', { title: 'blogdetail', result: doc[0] })
    })
})


module.exports = router;