
const User=require('../models/users')
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')

const register = async (req, res) => {
    //mm
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);
       const email= req.body.email;
        const adduser = new User({
            email: req.body.email,
            password: hash,
            userName: req.body.userName,            
            age:req.body.age,
            tokenDevice:req.body.tokenDevice,
            image:req.body.image,
            phoneNumber:req.body.phoneNumber
        });
        
    
        try { 
            
            const emailexist=await User.findOne({email});
        
            if( emailexist) {
                 return res.status(401).json('email already exist')
                } ;
            const saveduser = await adduser.save();
            // const{userName,email}=adduser._doc
            const { email,password, isAdmin, ...other } = saveduser._doc;

            res.status(201).json(other);
        } 
        catch (error) {
            res.status(400).json(error);
    
        }
    }





    const login = async (req, res) => {
        try {
            
            const user = await User.findOne({ email: req.body.email })
            if (!user) {
                return   res.status(404).json({msg:'email not valid'});
                   }
            const isPassword = await bcrypt.compare(req.body.password, user.password);
            if (!isPassword) {
         return   res.status(401).json({msg:'password not valid'});
            }
           
            const token = jwt.sign({ _id: user._id, isAdmin: user.isAdmin }, 'sec');
            const { email,password, isAdmin, ...other } = user._doc;
          res.header('access_token',token).send({token:token,user:other});
    
     
           // const { password, isAdmin, ...other } = user._doc;
         //res.status(200).json({"user":other,"token":token});
    
          //  return  res.cookie('access_token', token, { httpOnly: true }).status(200).json(other);
            
        } catch (error) {
           return res.status(400).json({msg:"error in login"});
    
        }
    
    
    
    
    }




// const login = async (req, res) => {
//     try {
//         const user = await User.findOne({ email: req.body.email })
//        if (!user) 
//        {
//        return res.status(402).json('email not valid')};
//         const isPassword = await bcrypt.compare(req.body.password, user.password);
//         if (!isPassword) {
//           return res.status(401).json('password not valid')};
//         const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, 'sec');
//         const { password, isAdmin, ...other } = user._doc;
//         // res.status(200).json({"user":other,"token":token});

//       return  res.cookie('access_token', token, { httpOnly: true }).status(200).json(other);

//     } catch (error) {
//         res.status(500).json("error in login");

//     }




// }

module.exports = { login, register }