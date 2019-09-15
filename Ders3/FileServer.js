var http = require('http')
var url = require('url')
var fs = require('fs')

var portNum = 8000;

http.createServer(function(req,res){
    var q = url.parse(req.url,true);
    //The reason for the leading dot is that pathname returns /filename.xxx
    //since we want to read a file in the same directory we put a '.'
    // before '/' and it becomes ./filename which is the correct syntax
    var filename = '.' + q.pathname;
    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(404,{'content-type':'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(portNum)

console.log(`Listening on port: ${portNum}`)
