const express = require('express');
const Joi = require('joi');
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/classroom")
.then(()=>console.log("Connected to classroomDB sucessfully"))
.catch(e=>console.log(e))

const app = express();
app.use(express.json())
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
const classroomSchema = mongoose.Schema({
    isGold: Boolean,
    name: String,
    phone:String
})

Classroom = mongoose.model("Classroom", classroomSchema)

app.get('/',async (req,res)=>{
    const classrooms = await Classroom.find()  
res.send(classrooms)
})
app.post('/',async (req,res)=>{
let classroom = new Classroom({
    name: req.body.name,
    isGold: req.body.isGold,
    phone: req.body.phone
})
classroom = await classroom.save()
res.send(classroom)
})
app.put('/:id',(req,res)=>{

})
app.delete('/:id',(req,res)=>{

})