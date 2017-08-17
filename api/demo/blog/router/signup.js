var express = require('express');
var router = express.Router();
var { userModel } = require('../mongodb/index');
router.post('/', (req, res) => {
    userModel.create(req.body, (err, doc) => {
        if (err) return res.json({ code: 0, msg: 'internal error' });
        res.json({ code: 1, msg: 'successed' })
    })
})
router.get('/', (req, res) => {
    userModel.find({ name: req.query.name }, (err, docs) => {
        if (err) return res.json({ code: 0, msg: 'internal error' });
        console.log(docs)
        if (docs.length > 0) {
            res.json({ code: 2, msg: 'name already exist' })
        } else {
            res.json({ code: 1, msg: "name is ok" })
        }
    })
})


module.exports = router;