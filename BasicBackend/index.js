require('dotenv').config()
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/instagram',(req,res)=>{
    res.send('This is my instagram page');
})

app.get('/login', (req,res)=>{
    res.send('<h1>This is Login Page</h1>')
});

app.get('/youtube', (req, res)=>{
    res.send('<h2>Chai aur Code</h2>')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Your Server is running on ${process.env.PORT}`)
})