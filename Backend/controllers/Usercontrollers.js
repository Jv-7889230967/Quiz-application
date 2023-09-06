const User = require('../Models/Usermodel');

const Create = async (req, res) => {
   try {
    const { name, email,password,role } = req.body;
    const exist = await User.findOne({ email: email });
    if (exist) {
        res.status(400);
        res.send("User already exists");
    } else {
        const user = await User.create({ name, email,password,role});
        if (user) {
            res.status(200).json({message:"user created"});
        } else {
            res.status(400);
            console.log("User not created");
        }
    }
   } catch (error) {
    console.log(error);
   }
}
const Login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password)
        {
            res.status(400);
            res.send("please fill all fields");
        }
         const user=await User.findOne({email:email});
         if(user && await user.matchPassword(password))
         {
            res.status(200).json({_id:user.id,name:user.name,email:user.email,role:user.role});
         }else{
            res.status(400);
            res.send("login failed");
         }
    }
     catch (error) {
        res.status(400);
        console.log(error);
    }
}

module.exports = { Create,Login };
