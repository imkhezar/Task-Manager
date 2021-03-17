const mongoose =require('mongoose')
const validator =require('validator')

const Tasks= mongoose.model('Tasks',{
    descriptions : {
        type: String,
        require: true
    },
    completed : {
        type : Boolean
    }

})
module.exports=Tasks