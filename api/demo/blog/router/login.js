var express = require('express');
var router = express.Router();
var { userModel } = require('../mongodb');

router.post('/', (req, res) => {
    userModel.find(req.body, (err, docs) => {
        if (err) return res.json({ code: 0, msg: 'internal error' });
        if (docs.length === 0) {
            req.session.userName = null;
            res.json({ code: 2, msg: 'no result' })
        } else {
            req.session.userName = docs[0].name;
            console.log(req.session)
            res.json({ code: 1, msg: 'successed', sess: req.session });
        }
    })
})

router.get('/', (req, res) => {
    console.log(req.session)
    var loginUser = req.session.userName;
    if (loginUser) {
        res.json({ code: 1, msg: 'logined', name: loginUser })
    } else {
        res.json({ code: 0, msg: 'not logined', sess: req.session })
    }
})



module.exports = router;