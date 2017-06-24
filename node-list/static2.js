var http = require('http');
var parse = require('url').parse;
var join = require('path').join;
var fs = require('fs');

var root = __dirname;


var server = http.createServer(function (req,res) {
	var url = parse(req.url);
	var path = join(root,url.pathname);

	fs.stat(path,function(err,stat){
		if(err){
			if(err.code == 'ENOENT'){
				res.statusCode = 404;
				res.end('not found')
			}else{
				res.statusCode = 500;
				res.end('internal server error')
			}
		}else{
			var stream = fs.createReadStream(path);
			stream.pipe(res);

			//注册error事件
			stream.on('error',function(){
				res.statusCode = 500;
				res.end('internal server error')
			})
		}

})
	
});

server.listen(3000,function(){
	console.log('listening on port 3000')
})