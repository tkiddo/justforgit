var { userModel, blogModel } = require('./index');
//清空
userModel.remove({ "name": { "$ne": "admin" } }, (err, docs) => {
    if (err) return err;
    blogModel.remove({}, (err, docs) => {
        if (err) return err;
    })
})