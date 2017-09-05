var express = require('express');
var router = express.Router();
var { userModel, blogModel } = require('../mongodb');

router.get('/', (req, res) => {
    blogModel.find({}).sort({ "_id": -1 }).exec((err, docs) => {
        if (err) return res.json({ code: 0, msg: 'get blog error' });
        res.json({ code: 1, msg: 'get blogs successfully', data: docs })
    })
})


router.post('/add', (req, res) => {
    var username = req.session.username;
    var newBlog = req.body;
    if (username) {
        userModel.find({ name: username }, (err, doc) => {
            newBlog = Object.assign({ userid: doc._id, username: username }, newBlog)
            blogModel.create(newBlog, (err, doc) => {
                if (err) return res.json({ code: 0, msg: 'add error' });
                res.json({ code: 1, msg: 'add successed' })
            })
        })
    } else {
        res.json({ code: 2, msg: 'login first' })
    }
})

router.delete('/delete', (req, res) => {
    var username = req.session.username;
    if (username) {
        blogModel.remove({ "_id": req.query._id }, (err, doc) => {
            if (err) return res.json({ code: 0, msg: 'delete error' });
            res.json({ code: 1, msg: 'del successed' })
        })
    }
})

router.post('/edit', (req, res) => {
    blogModel.update({ "_id": req.body._id }, { $set: { title: req.body.title, abstract: req.body.abstract, content: req.body.content, click: req.body.click, image: req.body.image, createtime: req.body.createtime } }, { upsert: true }, (err) => {
        if (err) {
            return res.json({ code: 0, msg: 'edit error' })
        }
        res.json({ code: 1, msg: 'edit successed' })
    })
})

module.exports = router;