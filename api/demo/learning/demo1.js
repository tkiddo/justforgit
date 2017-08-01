var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, { "content-type": 'text/html' });
    res.end("<h4>hello world</h4>")
}).listen(3000, function() {
    console.log('listening on port 3000')
})