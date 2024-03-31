// models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
     required: true
     },
  content: {
     type: String,
     // required: true
     },
     descrbtion: {
        type: String,
        // required: true
        },
  LikeCount: {
     type: String, 
    // required: true
     },
     category: {
      type: String, 
     // required: true
      },
    
},
{timestamps:true}
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
