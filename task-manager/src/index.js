const express = require('express')
const Tasks = require('./models/task')
require('./db/mongoose')
const User =require('./models/user')
const userRouter = require('./routers/user')
const taskRouter = require ('./routers/tasks')


const app =express()

const port = process.env.PORT || 3000

// app.use((req,res,next)=>{
//     if(req.method==='GET'){
//         res.send('get request are disabled')
//     }
//     else{
//         next()
//     }
// })

// app.use((req,res,next)=>{
//     res.status(503).send('Maintance Mode')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=>{  
    console.log('Server is running in on port '+port)
})

//const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')


// const myFunction= async ()=>{
//     //const token=jwt.sign({_id:'abc123'},'thisismynewcourse')
//     //console.log(token)
//     const token = jwt.sign({_id:'abc123'},'thisismynewcourse',{expiresIn:'7 days'})
//     console.log(token)

//     const data=jwt.verify(token,'thisismynewcourse')
//     console.log(data)
// }
// myFunction()