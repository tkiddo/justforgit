module.exports = function(app) {
    app.use('/signup', require('./signup'));
    app.use('/login', require('./login'))
}