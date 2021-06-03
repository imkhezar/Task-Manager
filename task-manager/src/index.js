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

const Task = require('./models/task')
//const User = require('./models/user')

const main = async ()=>{
    // const task= await Task.findById('60b833eb886fae24f8e93728')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

// const user = await  User.findById('60b83273ee165c1934f36356')
// await user.populate('tasks').execPopulate()
// console.log(user.tasks)
}

main()