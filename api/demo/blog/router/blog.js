var express = require('express');
var router = express.Router();
var { userModel, blogModel } = require('../mongodb');


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

module.exports = router;