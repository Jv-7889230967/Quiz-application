const express=require("express");
const app=express();
const connectDB=require("./config/DB");
const cors=require('cors');
const Userroutes=require("./Routes/Userroutes")
connectDB();

app.get("/",(req,res)=>{
res.send("Hello world");
})
app.use(cors());
app.use(express.json());
app.use("/api/user",Userroutes);

app.listen(5000,()=>{
    console.log("server connected");
})