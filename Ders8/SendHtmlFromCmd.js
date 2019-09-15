var http = require('http')
var fs = require('fs')

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    process.stdin.pipe(res);
}).listen(8000)

console.log('listening')

//cmd is directly connected to the page
//whatever you pass in, appears to the screen
//with the aid of pipe() function