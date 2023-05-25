const express=require('express');
const path=require('path');

const app=express();

const publicPath=path.join(__dirname,'public');
// app.use(express.static(publicPath));
app.get('',(req,resp)=>{
    resp.sendFile(`
    ${publicPath}/index.html
    `)
})
app.get('/about',(req,resp)=>{
    resp.sendFile(`
    ${publicPath}/about.html
    `)
})
app.get('/contact',(req,resp)=>{
    resp.sendFile(` ${publicPath}/contact.html `)
})



app.listen(5000);