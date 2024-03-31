
const express = require('express');
const router = express.Router();
const verfiy=require('../routes/verfiy'); 
 const { addPosts,deletePost,getAllPosts,updatePosts,getOnePosts, getAllPostsForuser } = require('../controller/posts');
 

router.post('/addPosts',verfiy.verfiyUser,addPosts ) 
router.get('/getAllPosts/',verfiy.verfiyUser, getAllPosts )
router.get('/getOnePosts/:id',verfiy.verfiyUser,getOnePosts);
router.get('/getAllPostsUser/:id',verfiy.verfiyUser,getAllPostsForuser);
router.put('/updatePosts/:id',verfiy.verfiyUser, updatePosts );
router.delete('/deletePost/:id',verfiy.verfiyUser ,deletePost );

module.exports = router;
