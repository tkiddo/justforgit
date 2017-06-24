var http = require('http');
var items = [];


var server = http.createServer(function(req,res){
	if(req.url =='/'){
		switch (req.method){
			case 'GET':
			show(res);
			break;
			case 'POST':
			add(req,res);
			break;
			default:
			badRequest(res);
		}
	}else{
		notFound(res);
	}
})


function show(res){
	var html = '<html><head><title>to do list </title></head><body>'
	+'<h1>to do list</h1>'
	+'<ul>'
	+items.map(function (item) {
	     return '<li>'+item+'</li>'
	}).join('')
	+'<form method = "post" action = "/">'
	+'<p><input type = "text" name = "item" /></p>'
	+'<p><input type = "submit" value = "add item" /></p>'
	+'</form></body></html>';
	res.setHeader('Content-Type','text/html');
	res.setHeader('Content-Length',Buffer.byteLength(html));
	res.end(html);
}


function notFound(res){
	res.statusCode = 404;
	res.setHeader('Content-Type','text/plain');
	res.end('not Found');
}

function badRequest(res){
	res.statusCode = 400;
	res.setHeader('Content-Type','text/plain');
	res.end('bad request');
}

var qs = require('querystring')
function add(req,res){
    var body = '';
    req.setEncoding('utf8');
    req.on('data',function(chunk){
    	body += chunk;
    });
    req.on('end',function(){
    	var obj = qs.parse(body);
    	items.push(obj.item);
    	show(res);
    })

}

server.listen(3000,function(){
	console.log('listening on port 3000')
})