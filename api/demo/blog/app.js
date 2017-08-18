/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./router');
var http = require('http');
var path = require('path');

var app = express();

// cors
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.send(200); /*让options请求快速返回*/
    else next();
});

// all environments
app.set('port', process.env.PORT || 8000);
app.use(express.static(path.join(__dirname, 'static')));
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');




// session
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var identityKey = 'skey';
var cookieParser = require('cookie-parser');
var Favicon = require('serve-favicon');
// app.use(Favicon())

//处理post参数
// 创建 application/x-www-form-urlencoded 编码解析
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//session设置
app.use(cookieParser())

app.use(session({
    name: identityKey,
    secret: 'chyingo',
    store: new FileStore(),
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 60 * 60 * 1000
    }
}))
routes(app);

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});