var fs = require('fs');
var rs = fs.createReadStream('testdata.md', { encoding: 'utf-8', bufferSize: 11 });
var data = '';
rs.on('data', function(trunk) {
    data += trunk;
});
rs.on('end', function() {
    console.log(data)
});

console.log('时间血环几只'.length);
console.log(new Buffer('时间血环几只').length)