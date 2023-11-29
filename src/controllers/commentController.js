const Comment = require("../models/commentModel");

const allComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const newComment = async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        res.json(comment);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const getComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        res.json(comment);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const putComment = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(comment);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        res.json(comment);
    } catch (error) {
        res.json({ message: error.message });
    }
};

module.exports = { allComments, newComment, getComment, putComment, deleteComment };