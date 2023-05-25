const express=require('express');
const app=express();

app.get('',(req,resp)=>{
    
    resp.send(`
    <h3>Welcome ${req.query.name} , This is Home page and Welcome  </h3>
    <a href='/about'>About Page</a>
    <a href='/contact'>Contact Page</a>
    `);
});

app.get('/about',(req,resp)=>{
    
    resp.send(`
    <h1>About Us</h1>
    <p>Hello! This is sachin kaushik ,who is learning the nodejs and express Today is going to learn how to write html and json in node js.</p>
    <button>Lode More</button>
    <a href='/'>Home Page</a>
    <a href='/contact'>Contact Page</a>

    
    `);
});
app.get('/contact',(req,resp)=>{
    
    resp.send(`
    <h1> Contact Us</h1>
    <input type='text' placeholder='Enter your name'><br><br>
    <input type-'email' placeholder='Enter your Email'><br><br>
    <textarea placeholder='Type your message'></textarea><br><br>
    <button> Submit</button>
    <a href='/'>Home Page</a>
    <a href='/about'>About Page</a>
    `);
});

app.get('/json',(req,resp)=>{
    
    resp.send(
        {
        name:'Sachin Kaushik',
        Email:'Skkahjkhj@gmaail.com',
        phoneno:768665656,
        }
   

    
    );
});

app.listen(5000);