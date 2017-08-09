var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
router.get('/', function(req, res) {
    // fs.readFile(path.resolve(__dirname, '../public/json/my.json'), { encoding: 'utf-8' }, function(err, data) {
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         res.end(JSON.stringify(data))
    //     }
    // })
    var file = path.resolve(__dirname, '../public/json/my.json');
    var result = JSON.parse(fs.readFileSync(file));
    res.end(JSON.stringify(result))
})

module.exports = router;