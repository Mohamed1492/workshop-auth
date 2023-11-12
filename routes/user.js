const express=require("express");
const { SignUp, login, getUser } = require("../Controllers/user.controllers");
const { SignUpRules,validator } = require("../middleware/validator");
const auth = require("../middleware/auth");

const router=express.Router();

router.post("/signUp",SignUpRules(),validator,SignUp);
router.post("/login",login)
router.get("/get",auth,getUser)

module.exports=router