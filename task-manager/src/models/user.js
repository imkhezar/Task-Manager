const mongoose =require('mongoose')
const validator =require('validator')
const bcrypt= require('bcryptjs')


const userSchema = new mongoose.Schema({ 
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
        unique:true,
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

userSchema.statics.findByCredentails= async (email,password)=>{
    const user = await User.findOne({email})

    if(!user){
        throw new Error('Unable to login')
    }

    const isMatch= await bcrypt.compare(password,user.password)

    if(!isMatch){
        throw new Error('Unable to Login')
    }

    return user
}
//Has the plain text before saving
userSchema.pre('save', async function(next){
    const user=this
   
    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password,8)
    }
    next()
})
const User = mongoose.model('User',userSchema)

module.exports=User
