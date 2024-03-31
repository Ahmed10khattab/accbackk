
const File = require('File');
const mongoose=require('mongoose');
 const modelfile=mongoose.Schema({
    image:String,
    title:String,
     
});
module.exports=mongoose.model('FILE',modelfile);
