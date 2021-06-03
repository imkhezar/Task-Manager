const express = require('express')
const Tasks = require('../models/task')
const router = express.Router()
const auth = require('../middleware/auth')
const User = require( '../models/user' )
const { countDocuments } = require( '../models/task' )

//get all tasks
router.get('/tasks',auth, async (req,res)=>{

    try{
        await req.user.populate('tasks').execPopulate()
        res.status(201).send(req.user.tasks)
    }catch(e){
        res.status(404).send()
    }
})
//get tasks by id
router.get('/tasks/:id',auth,async (req,res)=>{
    const _id= req.params.id
    try{
        //const task= await Tasks.findById(_id)
        const task= await Tasks.findOne({_id,owner:req.user._id})
        if(!task){
            return res.status(404).send()
        }
        
        res.status(201).send(task)
    }catch(e){
        res.status(404).send()

    }
})



//update specif task by id
router.patch('/tasks/:id',auth, async (req,res)=>{
    const update=Object.keys(req.body)
    const allowedUpdates=['descriptions','completed']
    const isValidOperation=update.every((update)=>{
        return allowedUpdates.includes(update)
    })
    if(!isValidOperation){
        return res.status(400).send({error:"invalide updates on tasks"})
    }

    try{
        const task= await Tasks.findOne({_id: req.params.id,owner:req.user._id})
        //const task= await Tasks.findById(req.params.id)
       
        
        //const task= await Tasks.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators:true})
        if(!task){
            return res.status(400).send({error:'No Task Found'})
        }
          
        update.forEach((update)=>{
            task[update] = req.body[update]
            
        })
        await task.save()
         res.status(200).send(task)
    }catch(e)
    {
        res.status(404).send(e)
    }
})



//delete tasks by id

router.delete('/tasks/:id',auth,async (req, res)=>{
    try{
        const task = await Tasks.findOneAndDelete({_id: req.params.id,owner:req.user._id})

        if(!task){
            return res.status(404).send('No Task Found')
        }
        res.status(200).send(task)
    }catch(e){

    }
})

//create a task
router.post('/tasks',auth, async (req,res)=>{

   // const task = new Tasks(req.body)
   const task = new Tasks({
       ...req.body, //=> es6 property to copy the complete object 
       owner: req.user._id // and add the owner property to it
   })

    try{
        const tasks= await task.save()
        res.status(201).send('added\n'+tasks)
    }catch(e){
        res.status(404).send()
    }
})
module.exports= router

