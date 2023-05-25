const express=require('express');
const app=express();

app.get('',(req,resp)=>{
    resp.send('Hello ,This is Home  page');
});

app.get('/about',(req,resp)=>{
    resp.send('Hello ,This is About  page');
});
app.get('/contact',(req,resp)=>{
    resp.send('Hello ,This is contact  page');
});

app.listen(5000);