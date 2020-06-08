const Router = require('express').Router()
const User = require('../models/auth.model')
const bcrypt = require('bcryptjs')
const { registerValidation, loginValidation } = require('../validation/validation')
const jwt = require('jsonwebtoken')


Router.route('/').get((req, res) => {
    res.send("Hello World")
})

//User Register
Router.route('/register').post(async (req, res) => {
    try {
        const { error } = await registerValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message)


        const users = await User.findOne({ email: req.body.email })
        if (users) return res.status(400).send("User Already exists")



        const saltRounds = 10;
        const hashed_password = await bcrypt.hash(req.body.password, saltRounds);
        // console.log(hashed_password)


        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashed_password,
        })

        await newUser.save()
            .then((response) => res.send(response + "Success"))
            .catch(err => console.log(err + "Error!"))


    } catch (err) {
        console.log(err.data)

    }




})

//User Login 
Router.route('/login').post(async (req, res) => {

    try {
        const { error } = await loginValidation(req.body)
        if (error) return res.status(400).send(error.details[0].message)

        const Userdetails = await User.findOne({ email: req.body.email })
        if (!Userdetails) return res.status(400).send("email doesn't exist")

        const comparePass = await bcrypt.compare(req.body.password, Userdetails.password)
        if (!comparePass) return res.status(400).send("Invalid Password")


        const tokensecret = process.env.TOKEN_SECRET
        const token = jwt.sign({ _id: Userdetails._id }, tokensecret)


        res.header('auth', token).send(token)

        // res.send("Login")

    } catch (error) {
        console.log(error + "error")
    }



})


module.exports = Router;