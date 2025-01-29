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


// o5EGoVngDiRfMwpG
//mongodb+srv://vaibhav031:o5EGoVngDiRfMwpG@cluster1.lmuqe.mongodb.net/
//Target to mongodb server, cluster is a server