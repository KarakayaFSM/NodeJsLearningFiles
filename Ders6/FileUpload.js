var http = require('http')
var fs = require('fs')
var formidable = require('formidable')
//var formidable = require('formidable')

http.createServer(function(req,res){
    
    if(req.url == '/fileupload'){
         var form = new formidable.IncomingForm();
         form.parse(req,(err,fields,files) =>{
            if(err){
                res.writeHead(500,{'content-type':'text/html'});
                res.end('An error occured while uploading file');    
            }
            //Initially, uploaded files are placed in a temporary folder
            //lets actually save them

            var oldPath = files.filetoupload.path;
            var newPath = `./${files.filetoupload.name}`

            fs.rename(oldPath,newPath,(err) =>{
                if(err) throw err;
                res.write('File uploaded and saved');
                return res.end();
            })
         });
    }

    fs.readFile('./form.html',(err,data) =>{
        if(err){
            res.writeHead(404,{'content-type':'text/html'});
            return res.end('Error 404 Not Found');
        }
        res.writeHead(200,{'content-type':'text/html'})    
        res.write(data);
        
    })
}).listen(8000)

console.log('listening')