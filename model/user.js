const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const userSchema=new Schema({
    email:String,
    password:String,
    FullName:String,
    phone:String
})
;
module.exports=mongoose.model("User",userSchema);