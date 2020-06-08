const Router = require('express').Router()
const verify = require('./privateRoutes')

Router.route('/').post(verify,(req,res)=>{
    res.send(req.user)
    // res.json({
    //     posts:{
    //         title:"My first Post",
    //         description :"Data that cannot be accessed without token"
    //     }
    // })
})

module.exports = Router;