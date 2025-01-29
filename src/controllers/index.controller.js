const userModel = require('../models/user.model')
const postModel = require('../models/make.user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
module.exports.indexController = (req, res) =>{
    let token = jwt.sign({email:"vaibhavchauhan@gmail.com"}, "secret")
    console.log(token);
    res.cookie('token', token)
    res.render("index")
}

module.exports.createUserController = async (req, res)=>{
    const {Username, bio , email , profileImage, password} = req.body

    const hash = await bcrypt.hash(password, 10)
      await userModel.create({
        Username,
        bio,
        email,
        profileImage,
        password:hash
    })
    
    res.redirect('/login')

   
    
}
module.exports.showUserController = async(req , res) =>{
    const User = await postModel.find() 
     res.render('home', {User})
}

// module.exports.makeUserController = (req, res) =>{
//     res.render('make.user.ejs')
// }


module.exports.makeFormController = (req, res)=>{
    res.render('makeform')
}

module.exports.makeHomecontroller = async (req, res)=>{
    const {caption, profileImage} = req.body

    const postUser = await postModel.create({
        caption,
        profileImage,
        created_at:new Date()
    })
    res.redirect('/home')
    console.log(req.body);


    
}
// const { likes } = await postModel.findById(id) 
// await postModel.findByIdAndUpdate(id, {likes: likes + 1})

module.exports.postLikeController = async (req, res)=>{
    const id = req.params.id
   await postModel.findByIdAndUpdate(id, {$inc:{
    likes: 1
   }})
    res.redirect('/home')
}

module.exports.loginController = (req, res)=>{
    res.render('login')
}

module.exports.userLoginController = async (req , res)=>{
    const {email, password} = req.body

    const user = await userModel.findOne({
        email
    })

    if( await bcrypt.compare(password, user.password)){
        res.redirect('/home')
    }else{
        res.redirect('/login')
    }

}

module.exports.deletePostController = async (req, res)=>{
    const id = req.params.id
    const deluser = await postModel.findByIdAndDelete(id)
    res.redirect('/home')

}

 


// module.exports.editUserController = async (req, res)=>{
//     const id = req.params.id
//     const EditedUser = await 
// }