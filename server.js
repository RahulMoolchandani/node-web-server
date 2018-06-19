const express= require('express');
var app= express();
const hbs=require('hbs');
app.set('view engine','hbs');
app.use((req,res,next)=>{
    var log = new Date().toString();
    var now = `${req.method} ${req.url}`;
    console.log(log + now);
    next();
})
app.use((req,res,next)=>{
    res.render('maintenance.hbs');
})
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('name',() => {
    return 'rahul';
})

app.get('/',(req,res) =>{
    res.render('homes.hbs');
})
app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        current : new Date().getFullYear()
    });
});
app.listen(2000);