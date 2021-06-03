const express = require('express')
const User = require ('../models/user')
const auth = require('../middleware/auth')
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

        console.log(token)
        //generateAuthToken()
        res.status(200).send({user,token})
    }catch(e){
        res.status(400).send('Something went wrong'+e)
    }
})

router.post('/users/logout',auth, async(req,res)=>{
    try{
       req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token
       })
       await req.user.save()
       res.send()
    }catch(e){
        res.status(500).send()
    }
})
router.post('/users/logoutAll',auth,async(req,res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.send()
    }catch(e){
        res.status(500).send()
    }
})

//get users
router.get('/users/me',auth, async (req,res)=>{

    res.send(req.user) 

})
//get user by id
// router.get('/users/:id',async (req,res)=>{

//     const _id= req.params.id
//     try{
//         const user= User.findById(_id)
//         res.status(201).send(user)
//     }catch(e){
//         res.status(404).send()

//     }
    
// })
//update specific user by id
router.patch('/users/me',auth, async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
    } catch (e) {
        res.status(400).send(e)
    }
})

//Delete User by ID
router.delete('/users/me',auth,async (req,res)=>{
    try{
        // const user= await User.findByIdAndDelete(req.user._id)
        
        // if(!user){
        //     return res.status(404).send('No User Found')
        // }
        await req.user.remove()
        res.send(req.user)
    }catch(e){  
        res.status(500).send()
    }
})
module.exports =router