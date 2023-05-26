const express=require('express');
const path=require('path');

const app=express();

const publicPath=path.join(__dirname,'public');

app.set('view engine','ejs');

app.get('',(req,resp)=>{
    resp.sendFile(`${publicPath}/index.html`);
});
app.get('/about',(req,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
});
app.get('/contact',(req,resp)=>{
    resp.sendFile(`${publicPath}/contact.html`)
});
app.get('/profile',(req,resp)=>{
    const user={
        name:'Sachin Kaushik',
        Email:'skkaushik63728gmail.com',
        Address:'Agra'
    }
    resp.render('profile',{user});
})



app.listen(4200);