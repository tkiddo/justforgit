var express = require('express');
var router = express.Router();
var path = require('path');
var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');


//图片上传


router.post('/', (req, res) => {
    //生成multiparty对象，并配置上传目标路径
    var form = new multiparty.Form({ uploadDir: '../static/uploads' });
    console.log(form)
        //上传完成后处理
    form.parse(req, function(err, fields, files) {
        var filesTmp = JSON.stringify(files, null, 2);
        if (err) {
            console.log('parse error: ' + err);
        } else {
            console.log('parse files: ' + filesTmp);
            var inputFile = files.inputFile[0];
            var uploadedPath = inputFile.path;
            var dstPath = '../static/uploads' + inputFile.originalFilename;
            //重命名为真实文件名
            fs.rename(uploadedPath, dstPath, function(err) {
                if (err) {
                    console.log('rename error: ' + err);
                } else {
                    console.log('rename ok');
                }
            });
        }

        res.writeHead(200, { 'content-type': 'text/plain;charset=utf-8' });
        res.write('received upload:\n\n');
        res.end(util.inspect({ fields: fields, files: filesTmp }));
    })
})


module.exports = router