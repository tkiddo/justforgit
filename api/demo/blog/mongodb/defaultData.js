var { userModel, blogModel } = require('./index');
userModel.find({}, (err, docs) => {
    console.log(docs)
    for (item in docs) {
        blogModel.create({
            userid: docs[item],
            username: docs[item].name,
            image: 'https://cn.vuejs.org/images/logo.png',
            title: 'Bootstrap',
            abstract: '简洁、直观、强悍的前端开发框架，让web开发更迅速、简单。',
            content: '在 Bootstrap 2 中，我们对框架中的某些关键部分增加了对移动设备友好的样式。而在 Bootstrap 3 中，我们重写了整个框架，使其一开始就是对移动设备友好的。',
            click: 10,
            createtime: '2017-02-04'
        }, (err, doc) => {
            if (err) return err
        })
    }
})