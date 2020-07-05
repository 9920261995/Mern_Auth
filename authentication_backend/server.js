const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const auth = require('./routers/auth')
const post = require('./routers/posts')
const cors = require('cors')

//Configure dotenv
dotenv.config()



// MongoDB Database Connection
const uri = process.env.DB_ATLAS
mongoose.connect(uri,{ useUnifiedTopology: true, useNewUrlParser: true },(err)=>{
    if(err){
        console.log("Error " +err)
    }
    else{
        console.log("Connected Successfully")
    }
})

//Used to parse json
app.use(express.json())

app.use(cors())


app.use('/api/auth',auth)
app.use('/api/posts/',post)


app.listen(4000,()=>{
    console.log("Server has successfully started at localhost 4000")
})