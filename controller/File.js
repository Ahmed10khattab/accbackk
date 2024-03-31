 const modelfile=require('../models/file');
 const express = require('express');
 const router = express.Router();



const filenameVariable='';
const path = require('path');
const multer= require('multer'); 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'uploads');
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload=multer({storage:storage});
router.post('/file',upload.single('image'),async(req,res)=>{
    console.log(req.file);
            const model=await new modelfile({
        title:'nnnnnnnnnnnnn',
        image: filenameVariable
      }).save();
      
       res.json(model) 
   });
   module.exports=router;