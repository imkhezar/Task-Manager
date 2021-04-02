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