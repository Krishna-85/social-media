const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    profileImage:{
        type:String
    },
    caption:{
        type:String
    },
    likes:{
        type:Number,
        default:0
    },
    created_at:{
        type:Date,
        required:true
    }


})
const postModel = mongoose.model('makeUsers', postSchema)
module.exports = postModel
 
    
