

// ==================== User Model ==================

const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const Usermodel = mongoose.model('Usermodel',UserSchema);
module.exports = Usermodel;