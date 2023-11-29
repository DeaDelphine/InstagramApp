const { mongoose, Schema } = require("mongoose");

const commentSchema = new Schema({  
    comment: { type: String, required: true },
    postId: { type: Schema.Types.ObjectId, ref: "Post", required: true },
   
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;