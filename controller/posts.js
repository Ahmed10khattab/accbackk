const Posts = require('../models/Posts');


const addPosts = async (req, res) => {
  try {
    const post = await Posts.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllPosts =
  async (req, res) => {
    try {
      let limit = req.query.limit;
      let skip = req.query.skip;
      const posts = await Posts.find().skip(skip).limit(limit).populate('user');
      res.status(200).json(posts);
    } catch (error) {
      console.error('Error getting posts:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

const getAllPostsForuser =

  async (req, res) => {
    try {
      const post = await Posts.find({ user: req.params.id }).populate('user');
      if (!post) {
        return res.status(404).json({ error: 'Posts not found' });
      }
      res.status(200).json(post);
    } catch (error) {
      console.error('Error getting post:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

const getOnePosts = async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Posts not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error('Error getting post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const updatePosts = async (req, res) => {
  try {
    const post = await Posts.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!post) {
      return res.status(404).json({ error: 'Posts not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const deletePost = async (req, res) => {
  try {
    const post = await Posts.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Posts not found' });
    }
    return res.status(204).json({ msg: 'deleted success' }); // No content
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
module.exports = { addPosts, deletePost, getAllPosts, updatePosts, getOnePosts, getAllPostsForuser }
