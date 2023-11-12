const jwt=require("jsonwebtoken");
const User=require("../model/user");
const config=require("config");
const secret=config.get("secret");

const auth=async(req,res,next)=>{
    const token=req.headers.authorization;
    console.log(token)
    try {
        const decoded=  jwt.verify(token,secret);
    
        const user=await User.findById(decoded._id)
        if(!user){
            res.status(405).json({msg:"Not Authorized"});
        }
        else{
            req.user=user;
            next();
        }
    } catch (error) {
        res.status(503).json({msg:error.message});
    }
}

module.exports=auth