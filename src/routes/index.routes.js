const express = require('express')
const Router = express.Router()
const controller = require('../controllers/index.controller')

Router.get('/', controller.indexController )
Router.post('/create-user', controller.createUserController )
Router.get('/home', controller.showUserController )
Router.get('/makeform', controller.makeFormController)
Router.post('/makehome', controller.makeHomecontroller)
Router.get('/like/:id', controller.postLikeController)
Router.get('/delete/:id', controller.deletePostController)
Router.post('/login', controller.userLoginController)
Router.get('/login', controller.loginController)
// Router.get('/make-user', controller.makeUserController)
// Router.get('/edit/:id', editUserController)
// Router.get('/home/:id/edit', controller.editFormController)

module.exports = Router