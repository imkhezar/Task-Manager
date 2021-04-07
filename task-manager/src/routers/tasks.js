const express = require('express')
const Tasks = require('../models/task')
const router = express.Router()

//get all tasks
router.get('/tasks', async (req,res)=>{

    try{
        const tasks= await Tasks.find({})
        res.status(201).send(tasks)
    }catch(e){
        res.status(404).send()
    }
})
//get tasks by id
router.get('/tasks/:id',async (req,res)=>{
    const _id= req.params.id
    try{
        const task= await Tasks.findById(_id)
        res.status(201).send(task)
    }catch(e){
        res.status(404).send()

    }
})



//update specif task by id
router.patch('/tasks/:id', async (req,res)=>{
    const update=Object.keys(req.body)
    const allowedUpdates=['descriptions','completed']
    const isValidOperation=update.every((update)=>{
        return allowedUpdates.includes(update)
    })
    if(!isValidOperation){
        return res.status(400).send({error:"invalide updates on tasks"})
    }

    try{
        const task= await Tasks.findById(req.params.id)
         
        update.forEach((update)=>{
            task[update] = req.body[update]
            
        })
        await task.save()
        //const task= await Tasks.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators:true})
        if(!task){
            return res.status(400).send({error:'No Task Found'})
        }
         res.status(200).send('sucessfully updated')
    }catch(e)
    {
        res.status(404).send(e)
    }
})



//delete tasks by id

router.delete('/tasks/:id',async (req, res)=>{
    try{
        const task = await Tasks.findByIdAndDelete(req.params.id)

        if(!task){
            return res.status(404).send('No Task Found')
        }
        res.status(200).send('Successfully Deleted\n'+task)
    }catch(e){

    }
})

//create a task
router.post('/tasks', async (req,res)=>{

    const task = new Tasks(req.body)

    try{
        const tasks= await task.save()
        res.status(201).send('added\n'+tasks)
    }catch(e){
        res.status(404).send()
    }
})
module.exports= router

