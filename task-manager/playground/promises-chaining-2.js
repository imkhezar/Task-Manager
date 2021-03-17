require('../src/db/mongoose')

const Task = require('../src/models/task')

// Task.findByIdAndDelete('60337e936ffd73257c3541b5').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskandCount = async(id)=>{
    const del= await Task.findByIdAndDelete('60475c929acee82bf82e67ac')
    const count =await Task.countDocuments({completed:false})
    return count
}

//r => result ,e=> error
deleteTaskandCount('60475c929acee82bf82e67ac').then((r)=>{
    console.log(r)
}).catch((e)=>{
    console.log(e)
})

