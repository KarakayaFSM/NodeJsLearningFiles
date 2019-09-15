var http = require('http')
var fs = require('fs')


http.createServer((req,res) => {
        
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200,{'content-type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res)
    }else if(req.url === '/contact'){
        res.writeHead(200,{'content-type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res)
    }else if(req.url === '/api/ninjas'){
        var ninjas = [
            {name:'Ahmad',surname:'Ak'},
            {name:'Abdullah',surname:'Rose'},
            {name:'Shamettin',surname:'Koçbaşı'}
        ];

        res.writeHead(200,{'content-type': 'application/JSON'});
        res.end(JSON.stringify(ninjas));
    } else {
        res.writeHead(404,{'content-type': 'text/html'});
        fs.createReadStream(__dirname + '/NotFound.html').pipe(res);
    }
    
}).listen(8000)

console.log('listening')