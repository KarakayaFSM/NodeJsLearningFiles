var express = require('express')

var app = express();

app.listen(8000);

app.get('/',(req,res)=>{
    res.send('welcom to thehome page');
})

app.get('/contact',(req,res)=>{
    res.send('welcom to the contact page');
})

app.get('/profile/:id',(req,res)=>{
    res.send(`You requested to see the profile of the user with id: ${req.params.id}`);
})