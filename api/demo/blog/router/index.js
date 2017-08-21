module.exports = function(app) {
    app.use('/signup', require('./signup'));
    app.use('/login', require('./login'));
    app.use('/views', require('./views'));
    app.use('/logout', require('./logout'));
    app.use('/blog', require('./blog'));
    app.use('/upload', require('./upload'))
}