const mongoose = require('mongoose')


const connect = ()=>{
    // console.log(process.env.MONGO_URI)
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("connected to the database")
    })
    .catch(err=>{
        console.log("error connecting to the database")
    })
}

module.exports = connect;