const User=require("../model/user");
var bc = require('bcryptjs');
const config=require("config")
const secret=config.get("secret")
const jwt=require("jsonwebtoken")


exports.SignUp=async(req,res)=>{
    const {FullName,email,password,phone}=req.body;
    try {
        const exestingUser=await User.findOne({email});
        if (exestingUser) return res.status(409).json({msg:"Email already exist"})

        const newUser= User({
            FullName,email,password,phone
        });
        const salt= await  bc.genSalt(1);
        const hash=await bc.hashSync(password,salt)
        newUser.password=hash;
        await newUser.save();
        const payload={
            _id:newUser._id,
            FullName:newUser.FullName,
            email:newUser.email,
            phone:newUser.phone
          

        }
        const token=jwt.sign(payload,secret)
        res.status(201).send({
            token,
            user:{
                _id:newUser._id,
                FullName:newUser.FullName,
                email:newUser.email,
                phone:newUser.phone,
                password:newUser
            }
        })
        
    
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
}

exports.login=async(req,res)=>{
    const {email,password}=req.body
    try {
    const theUser=await User.findOne({email});
    console.log(theUser)
    if (!theUser){
        return res.status(403).json({msg:'Invalid Email or Password'})};
        const isMatch=await bc.compare(password,theUser.password);
        console.log(isMatch)
        if(!isMatch){
        return res.status(403).json({msg:'Invalid Email or Password'})};

        const payload={
            _id:theUser._id,
            FullName:theUser.FullName,
        email:theUser.email,
            phone:theUser.phone
        };
        const token=jwt.sign(payload,secret)
        res.status(201).send(
            {

            token,
            user:{
                _id:theUser._id,
                FullName:theUser.FullName,
                email:theUser.email,
                phone:theUser.phone  ,
            password:theUser.password
            }
        }
        )
    
        
    } catch (error) {
        res.status(500).json({msg:error.message});
        
    }}

    exports.getUser=(req,res)=>{
        res.send(req.user)
    }