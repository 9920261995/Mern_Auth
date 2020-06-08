const mongoose =require('mongoose')

const userSchema =new mongoose.Schema({
    name:{
        required:true,
        type:String,
        maxlength:100,
    },
    email:{
        required:true,
        type:String,
        maxlength:100,
        minlength:6,
    },
    password:{
        required:true,
        type:String,
        maxlength:100,
        minlength:8,
    },
    date:{
        type:Date,
        default:Date.now
    }
    
})

const User = mongoose.model('User',userSchema)

module.exports = User;