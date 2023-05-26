const express=require('express');
const app= express();
const reqFilter=require('./middleware');



// app.use(reqFilter);

app.get('/', (req,resp)=>{
resp.send('Welcome to Home page')
});

app.get('/user',reqFilter, (req,resp)=>{
    resp.send('Welcome to User page')
    });
app.get('/Payment',reqFilter, (req,resp)=>{
        resp.send('Welcome to Payement page')
        });
app.get('/about', (req,resp)=>{
        resp.send('Welcome to About Us page')
        });

app.get('/contact', (req,resp)=>{
        resp.send('Welcome to Contact page')
        });
    


app.listen(4300)