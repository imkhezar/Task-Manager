const express = require('express')
const Tasks = require('./models/task')
require('./db/mongoose')
const User =require('./models/user')


const app =express()

const port = process.env.PORT || 3000

app.use(express.json())

//save userws
app.post('/users', async (req,res)=>{
    const user= new User(req.body)

    try{
        await user.save()
        res.status(201).send(user)
    }catch(e){
        res.status(404).send(e)
    }
})

//get users
app.get('/users', async (req,res)=>{

    try{
        const users= await User.find({})
        res.status(201).send(users)
    }catch(e){
        res.status(404).send()
    }   

})
//get user by id
app.get('/users/:id',async (req,res)=>{

    const _id= req.params.id
    try{
        const user= User.findById(_id)
        res.status(201).send(user)
    }catch(e){
        res.status(404).send()

    }
    
})

//get all tasks
app.get('/tasks', async (req,res)=>{

    try{
        const tasks= await Tasks.find({})
        res.status(201).send(tasks)
    }catch(e){
        res.status(404).send()
    }
})
//get tasks by id
app.get('/tasks/:id',async (req,res)=>{
    const _id= req.params.id
    try{
        const task= await Tasks.findById(_id)
        res.status(201).send(task)
    }catch(e){
        res.status(404).send()

    }
})

//update specific user by id
app.patch('/users/:id', async (req,res)=>{
    const update=Object.keys(req.body)
    const allowedUpdates=['name','email','password','age']
    const isValidOperation =update.every((update)=>{
        return allowedUpdates.includes(update)
    })

    if(!isValidOperation){
        return res.status(400).send({error:'invalide Updates'})
    }
    try{
        const user =await User.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators:true})
        
        if(!user){
            return res.status(404).send()
        }
        res.send(user)

    }catch(e){
        res.status(404).send(e)
    }
})

//update specif task by id
app.patch('/tasks/:id', async (req,res)=>{
    const update=Object.keys(req.body)
    const allowedUpdates=['descriptions','completed']
    const isValidOperation=update.every((update)=>{
        return allowedUpdates.includes(update)
    })
    if(!isValidOperation){
        return res.status(400).send({error:"invalide updates on tasks"})
    }

    try{
        const task= await Tasks.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators:true})
        if(!task){
            return res.status(400).send({error:'No Task Found'})
        }
         res.status(200).send('sucessfully updated')
    }catch(e)
    {
        res.status(404).send(e)
    }
})

//Delete User by ID
app.delete('/users/:id',async (req,res)=>{
    try{
        const user= await User.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(404).send('No User Found')
        }
        res.send(user)
    }catch(e){  
        res.status(500).send()
    }
})

app.post('/tasks', async (req,res)=>{

    const task = new Tasks(req.body)

    try{
        const tasks= await task.save()
        res.status(201).send('added\n'+tasks)
    }catch(e){
        res.status(404).send()
    }
})

app.listen(port, ()=>{  
    console.log('Server is running in on port 3000')
})