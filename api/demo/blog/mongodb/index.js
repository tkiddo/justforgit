var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost', (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log('mongodb connected')
});

var userSchema = new mongoose.Schema({
    name: { type: String },
    password: { type: String }
})

var userModel = mongoose.model('user', userSchema, 'user');

var blogSchema = new mongoose.Schema({
    userid: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    title: { type: String },
    abstract: { type: String },
    content: { type: String },
    click: { type: Number },
    createtime: { type: String }
})

var blogModel = mongoose.model('blog', blogSchema, 'blog');

// userModel.create({ name: 'admin', password: '123456' }, (err, doc) => {
//     if (err) return err;
//     blogModel.create({ userid: doc._id, title: 'first blog', abstract: 'one', content: 'this is first blog', click: 10, createtime: '2017-02-04' }), (err, doc) => {
//         if (err) return err;
//     }
// })

module.exports = { userModel, blogModel }