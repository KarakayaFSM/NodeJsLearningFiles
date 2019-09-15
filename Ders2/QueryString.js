var http = require('http')
var url = require('url')


var portNum = 8000;

http.createServer(function(req,res){
    res.writeHead(200,{'content-type' : 'text/html'});
    var q = url.parse(req.url,true).query;
    var txt = `Year:${q.year} Month:${q.month}`
    res.end(txt);
}).listen(portNum);

console.log(`Listening on port: ${portNum}`)

//http://localhost:8000/?year=2019&month=September