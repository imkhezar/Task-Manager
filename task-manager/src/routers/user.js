const express = require('express')
const User = require ('../models/user')
const router = new express.Router()

//save userws
router.post('/users/signup', async (req,res)=>{
    const user= new User(req.body)

    try{
        await user.save()
        const token= await user.generateAuthToken()
        res.status(201).send({user,token})

        res.status(201).send(user)
    }catch(e){
        res.status(404).send(e)
    }
})

//findByCredentails
router.post('/users/login',async (req,res)=>{
    try{
        const user= await User.findByCredentails(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        //console.log(token)
        //generateAuthToken
       // res.send({user,token})
    }catch(e){
        res.status(400).send('Something went wrong')
    }
})
//get users
router.get('/users', async (req,res)=>{

    try{
        const users= await User.find({})
        res.status(201).send(users)
    }catch(e){
        res.status(404).send()
    }   

})
//get user by id
router.get('/users/:id',async (req,res)=>{

    const _id= req.params.id
    try{
        const user= User.findById(_id)
        res.status(201).send(user)
    }catch(e){
        res.status(404).send()

    }
    
})
//update specific user by id
router.patch('/users/:id', async (req,res)=>{
    const update=Object.keys(req.body)
    const allowedUpdates=['name','email','password','age']
    const isValidOperation =update.every((update)=>{
        return allowedUpdates.includes(update)
    })

    if(!isValidOperation){
        return res.status(400).send({error:'invalide Updates'})
    }
    try{

        const user = await User.findById(req.params.id)

        allowedUpdates.forEach((update)=>{
            user[update]= req.body[update]
            
        })
        await user.save()
        //const user =await User.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators:true})
        
        if(!user){
            return res.status(404).send()
        }
        res.send(user)

    }catch(e){
        res.status(404).send(e)
    }
})

//Delete User by ID
router.delete('/users/:id',async (req,res)=>{
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
module.exports =router