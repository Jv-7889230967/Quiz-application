const express=require('express');
const { Create, Login } = require('../controllers/Usercontrollers');
const {Score,All}=require("../controllers/Datacontrollers");
const router=express.Router();

router.route("/create").post(Create);
router.route("/login").post(Login);
router.route("/score").post(Score);
router.route("/all").get(All);

module.exports=router; 