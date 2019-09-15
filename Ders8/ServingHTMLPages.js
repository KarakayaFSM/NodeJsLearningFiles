var http = require('http')
var fs = require('fs')


http.createServer((req,res) => {
    res.writeHead(200,{'content-type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html','utf8').pipe(res);    
}).listen(8000)

console.log('listening')