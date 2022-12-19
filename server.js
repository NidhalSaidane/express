const express=require('express')
const app=express()

const port=8080;

const work =()=>{
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();
    
    return day !== 1 && day !== 7 && hour < 23 && hour > 9 ; 
}


app.use(function(req,res,next){
    if (work()){
        next();
    }
    else {
        res.sendFile(__dirname+'/public/closed.html')
        console.log('This App is not available !')
    }
})

app.use( express.static('public'));


app.get('/',function(req,res){
    res.sendFile(__dirname+'/public/home.html')
});
app.get('/contact',function(req,res){
    res.sendFile(__dirname+'/public/contact.html')
});
app.get('/about',function(req,res){
    res.sendFile(__dirname+'/public/about.html')
});



app.listen(8080,(err)=>{
    err ? console.log(err):console.log('server run on 8080')})