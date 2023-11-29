const { mongoose, Schema } = require("mongoose");

const postSchema = new Schema({
    title: { type: String, required: true },
    legend: { type: String, required: true},
    image: { type: String },
    commentId:{ type: Array, default: [] },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;