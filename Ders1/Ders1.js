var http = require('http');
var myModule = require('./myModules');

http.createServer((req,res) =>{
    res.writeHead(200,{'content-type' : 'text/html'});
    //res.write("Date: "+myModule.myGetTime())
    res.write(myModule.myArrowGetTime())
    //res.write(myModule.myArrowGetTimeV2())
    res.end();
}).listen(8000);

console.log('listening on port: 8000');