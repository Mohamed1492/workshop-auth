const express=require("express");
const connectDb=require("./config/connectDb");
const app=express();
const user=require("./routes/user")
connectDb();
app.use(express.json());
app.use("/user",user)
const PORT=process.env.PORT||5000;
app.listen(PORT,err=>err?console.log(err):console.log(`server is successfuly runing on PORT ${PORT}`))