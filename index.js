const express = require('express');
const Joi = require('joi');
const mongoose = require('mongoose')

const app = express();
const port = process.env.PORT || 5000;

app.listen(5000,()=>{
    console.log(`listening on port ${port}`)
})
app.get('/',(req,res)=>{
res.send('home')
})
app.post('/',(req,res)=>{

})
app.put('/:id',(req,res)=>{

})
app.delete('/:id',(req,res)=>{

})