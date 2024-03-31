 

const express=require("express");
const { login, register } = require("../controller/auth");
const router=express.Router();
const vtoken= require("../routes/verfiy");
 



router.post('/signup',register);
router.post('/login', login);
router.get('/s',vtoken.verfiyUser,(req,res, )=>{
    res.send('/////////////////////////////');
    
});
module.exports = router
