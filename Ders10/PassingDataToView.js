var express = require('express')
var bodyParser = require('body-parser')

var app = express()
var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.set('view engine','ejs');

//first param:route second param: dirname
app.use('/assets',express.static('assets'));

app.get('/',(req,res)=>{
    res.render('index')
});

app.get('/contact',(req,res)=>{
    res.render('contact',{qs:req.query})
});

app.post('/contact',urlencodedParser,(req,res)=>{
    res.render('contact-success',{data:req.body});
});

app.get('/profile/:name',(req,res)=>{
    //res.send(`You requested to see the profile of the user with id: ${req.params.id}`);
    var data = {age:20, job:'ninja', hobbies:['eating', 'fighting', 'reading']}
    res.render('profile',{person: req.params.name, data:data});
});

app.listen(8000);