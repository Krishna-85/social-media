const express = require('express')
const app = express()
const indexRouter = require('./routes/index.routes')
app.set('views', 'src/views')
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/', indexRouter  )

module.exports = app