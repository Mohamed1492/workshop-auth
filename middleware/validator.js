const {check,validationResult}=require("express-validator");

exports.SignUpRules=()=>[
check("FullName","this field is require").notEmpty(),
check("email","this should be a valid email").isEmail(),
check('password','Password must contain at least 8 characters').isLength({min:5}),
check("phone","this should be a valid number").isLength({max:10})
];

exports.validator=(req,res,next)=>{
    const error=validationResult(req);
    return error.isEmpty()?next():res.status(400).json({error:error.array()});
}
