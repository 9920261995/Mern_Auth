const jwt = require('jsonwebtoken')

module.exports = verify = (req,res,next)=>{
    const token = req.header("auth");
    if(!token) return res.status(400).send("Access denied")
    try {
        const verifyToken = jwt.verify(token,process.env.TOKEN_SECRET)
        req.user = verifyToken
        next();
    } catch (error) {
        res.status(400).send("Invalid Token")
    } 

}