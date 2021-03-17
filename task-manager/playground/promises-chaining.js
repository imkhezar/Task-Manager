require('../src/db/mongoose')

const { ResumeToken } = require('mongodb')
const User= require('../src/models/user')

// User.findByIdAndUpdate('6034eb9654c94628a8b7c46e',{
//     email: 'bawo@gmail.com'}).then((user)=>{
//         console.log(user)
//         return User.countDocuments({email: 'bawo@gmail.com'})
//     }).then((result)=>{
//         console.log(result)
//     }).catch((e)=>{
//         console.log(e)
//     })

    const  updateAgeandCount= async (id,age)=>{
        const user= await User.findByIdAndUpdate(id,{age})
        const count= await User.countDocuments({age})
        return count
    }

    updateAgeandCount('604360f0df367f3684b12236',2).then((r)=>{
        console.log(r)
    }).catch((e)=>{
        console.log(e)
    })

