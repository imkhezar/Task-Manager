const mongoose =require('mongoose')
const validator =require('validator')

/**
 * Connection with database
 */

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify:false
})

// /**
//  * Define Model
//  */



// //  const me= new User({
// //      name: 'Muhammad Shahzib',
// //      age: 89,
// //      email: 'gulkhan@gmail.com'
// //  })

// // /**
// //  * Use methode to save to database
// //  */

// //  me.save().then((me)=>{
// //         console.log(me)
// //  }).catch((error)=>{
// //     console.log(error)
// //  })



// /**
//  * Creating instance of tasks model
//  */
// const task1= new Tasks({
//     descriptions: 'Renew SSL on personal website',
//     completed: false
// })

// /**
//  * Save
//  */
// // task1.save().then((task1)=>{
// //     console.log(task1)
// // }).catch((error)=>{
// //     console.log(error)
// // })