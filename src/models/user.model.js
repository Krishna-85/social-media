const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    Username:{
        type:String
    },
    profileImage:{
        type:String
    },
    bio:{
        type:String
    },
    email:{
        type:String
    },
})

const userModel = mongoose.model('userData', userSchema)
module.exports = userModel