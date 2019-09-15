var http = require('http')
var url = require('url')
var ucs = require('upper-case')

// npm install upper-case

http.createServer(function(req,res){
    var q = url.parse(req.url,true);
    var input = q.pathname;
    res.writeHead(200,{'content-type':'text/html'});
    res.write(ucs(input.substring(1,q.pathname.length)));
    res.end();
}).listen(8000)
console.log('listening')
