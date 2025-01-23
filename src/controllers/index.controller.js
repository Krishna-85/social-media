const userModel = require('../models/user.model')
const postModel = require('../models/make.user.model')
module.exports.indexController = (req, res) =>{
    res.render("index")
}

module.exports.createUserController = async (req, res)=>{
    const {username, bio , email , profileImage} = req.body

    const newUser = await userModel.create({
        username,
        bio,
        email,
        profileImage
    })
    res.redirect('/home')
    // console.log(req.body);
    
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
        profileImage
    })
    res.redirect('/home')
    console.log(req.body);
    
}

module.exports.postLikeController = async (req, res)=>{
    const id = req.params.id
    const { likes } = await postModel.findById(id) 
    await postModel.findByIdAndUpdate(id, {likes: likes + 1})
    res.redirect('/home')
}

module.exports.deletePostController = async (req, res)=>{
    const id = req.params.id
    const deluser = await postModel.findByIdAndDelete(id)
    res.redirect('/home')

}