const mongoose =require('mongoose')
const validator =require('validator')

const User = mongoose.model('User',{ 
    name : {
        type: String
        ,
        require: true
    },
    age:{
        type: Number,
        default: 0,
        validate(value){
            if(value<0
                ){
                throw new Error('Not a valid age')
            }
        }
    }, 
    email: {
        type:  String,
        require: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Not a valid email')
            }
        }
    },
    
    password:{
         type: String,
         require : true,
         validate(value){
             if(!validator.isStrongPassword(value,{minNumbers: 0})){
                 throw new Error('Kindly Use Strong Password')
             }

         }
    }
    
    
})

module.exports=User
