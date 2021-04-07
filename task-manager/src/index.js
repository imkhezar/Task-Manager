const express = require('express')
const Tasks = require('./models/task')
require('./db/mongoose')
const User =require('./models/user')
const userRouter = require('./routers/user')
const taskRouter = require ('./routers/tasks')


const app =express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=>{  
    console.log('Server is running in on port 3000')
})

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')


const myFunction= async ()=>{
    const token = jwt.sign({_id:'abc123'},'thisismynewCourse',{expiresIn:'7 days'})
    console.log(token)

    const data=jwt.verify(token,'thisismynewCourse')
    console.log(data)
}
myFunction()