// app.js
const express = require('express');


 
const app = express();
const port = process.env.PORT || 3000;
const auth=require('./routes/authRoute')
const notification=require('./routes/notification')
const posts=require('./routes/posts')
const order=require('./routes/order')
const modelfile=require('./models/file');
const file=require('./controller/File');



const mongo=require('mongoose')

// const v= mongo.connect('mongodb://localhost:27017/usersdb',
//   {
//     useNewUrlParser: true,
//      useUnifiedTopology: true
//   }
  
// );
// if(v)      console.log('server  con') 
// if(!v)      console.log('server  nooo') 


mongo.connect('mongodb+srv://AccountAdmin:mF7nHYMXB36sCfTh@atlascluster.ytbxqwi.mongodb.net/AccoutSales?retryWrites=true&w=majority')
.then(()=>{console.log('connected mongoose successfull')},)
.catch((error)=>
    console.log(error)

)
app.use(express.json());
app.use('/auth/v1',auth);
app.use('/notification/v1',notification);
app.use('/posts/v1',posts);
app.use('/order/v1',order);
app.use('/file/v1',file)



const path = require('path');
const multer= require('multer'); 
const filenameVariable='';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadPath = path.join(__dirname, 'Uploads');
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
  const upload=multer({storage:storage});
  app.post('/file',upload.single('image'),async(req,res)=>{
      console.log(req.file);
              const model=await new modelfile({
          title:'nnnnnnnnnnnnn',
          image: filenameVariable
        }).save();
        
         res.json(model) 
     });




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
