const Joi = require('@hapi/joi')

const registerValidation = data =>{
    const ValidSchema = Joi.object({
        name: Joi.string()
            .min(6)
            .required(),
        email: Joi.string()
            .email()
            .required(),
        password: Joi.string()
            .min(8)
            .required(),
    
    })
    return ValidSchema.validate(data)    
    
}

const loginValidation = data =>{
    const ValidSchema = Joi.object({
        email: Joi.string()
            .email()
            .required(),
        password: Joi.string()
            .min(8)
            .required(),
    

    })
  
    return ValidSchema.validate(data)

}


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;