var http = require('http')

http.createServer((req,res) => {
    res.writeHead(200,{'content-type': 'application/JSON'});
        
    var myObj = {
        name:'Mahmoud',
        surname:'Ak',
        age: 20
    };
    res.end(JSON.stringify(myObj));
}).listen(8000)

console.log('listening')