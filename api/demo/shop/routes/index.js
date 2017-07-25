module.exports = function(app) {
    app.get('/', function(req, res) {
        res.redirect('/productList')
    });
    app.use('/productList', require('./productList'));
}