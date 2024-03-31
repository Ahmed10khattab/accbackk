const mongoose = require('mongoose');
 
const userSchema = new mongoose.Schema({
  
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
   required: true,
   minlength: 6, // Adjust the minimum length as needed
  },
  phoneNumber: {
    type: String,
    required: true,
    minlength:11
  },
  age: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  tokenDevice:{
type:String
  }
 });



const User = mongoose.model('User', userSchema);

module.exports = User;
