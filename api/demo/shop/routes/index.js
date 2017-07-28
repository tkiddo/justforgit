module.exports = function(app) {
    app.get('/', function(req, res) {
        // console.log(req.session)
        // var loginUser = req.session.loginUser;
        // var isLogined = !!loginUser;
        // if (isLogined) {
        //     res.json({ msg: 'logined' })
        // } else {
        //     res.json({ msg: 'not logined' })
        // };
        res.sendFile("F:/gitfile/api/demo/shop/public/html/index.html")
    });
    app.use('/productList', require('./productList'));
    app.use('/login', require('./login'));
    app.use('/logout', require('./logout'));
}