var { userModel, blogModel } = require('./index');
userModel.find({}, (err, docs) => {
    console.log(docs)
    for (item in docs) {
        blogModel.create({
            userid: docs[item],
            username: docs[item].name,
            image: 'https://cn.vuejs.org/images/logo.png',
            title: 'first blog',
            abstract: 'one',
            content: 'this is first blog',
            click: 10,
            createtime: '2017-02-04'
        }, (err, doc) => {
            if (err) return err
        })
    }
})