const Post = require("../models/postModel");

const allPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const newPost = async (req, res) => {
    const { title, legend, image, commentId } = req.body;
    try {
        const post = await Post.create({ title, legend, image });
        post.commentId = commentId ? commentId.split(",") : []; 
        post.save();
        res.json(post);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.json(post);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const putPost = async (req, res) => {
    const { title, legend, image, commentId } = req.body;
    try {
        const updatePost = { title: title , legend:legend, image: image, commentId: commentId? commentId.split(",") : [] };
            let post = await Post.findByIdAndUpdate(
                { _id: req.params.id },
                updatePost,
                { new: true }
              );
              res.json({ message: "Post updated successfully", post });
    } catch (error) {
        res.json({ message: error.message });
    }
};

const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.json(post);
    } catch (error) {
        res.json({ message: error.message });
    }
};

module.exports = { allPosts, newPost, getPost, putPost, deletePost };