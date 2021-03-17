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