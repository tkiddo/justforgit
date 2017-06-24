var http = require('http');
var url = require('url');
var items = [];
var server = http.createServer(function (req,res) {
	switch(req.method){
		case 'POST':
		req.setEncoding('utf-8');
		req.on('data',function(chunk){
			item += chunk;
		});
		req.on('end',function(){
			items.push(item);
			res.end('ok\n');
		});
		break;
		case 'GET':
		items.forEach(function(item,i){
			res.write(i+')'+item+'\n');
		});
		res.end();
		break;
	}
})

server.listen(3000,function(){
	console.log('listening on port 3000')
})