const express=require('express');
const app=express();

app.get('',(req,resp)=>{
    let getData=req.query.name;
    resp.send('Welcome '+getData+' ,  This is Home  page and Welcome  ');
});

app.get('/about',(req,resp)=>{
    
    resp.send('Welcome  ,  This is About  page and Welcome  ');
});
app.get('/contact',(req,resp)=>{
    
    resp.send('Welcome ,  This is Contact  page and Welcome  ');
});

app.listen(5000);