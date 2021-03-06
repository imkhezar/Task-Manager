const mongoose =require('mongoose')
const validator =require('validator')

const taskSchema = new mongoose.Schema({
    descriptions : {
        type: String,
        require: true
    },
    completed : {
        type : Boolean,
        require:true,
        default: false,
        
    },
    owner:{
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }

})

taskSchema.pre('save', async function(next){
    const task=this

    if(task==='') {
        console.log('No task found')
    }
    next()

})

const Tasks= mongoose.model('Tasks',taskSchema)
module.exports=Tasks