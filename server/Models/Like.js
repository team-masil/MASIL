const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { User } = require("./User");
const { Comment } = require("./Comment");
const { Content } = require("./Content");

const likeSchema = mongoose.Schema({  
  userId: {
    type: Schema.Types.ObjectId,
    ref: User
  },
  commentId: {
    type: Schema.Types.ObjectId,
    ref: Comment
  },
  contentId: {
    type: Schema.Types.ObjectId,
    ref: Content
  }
},
  { timestamps: true }
);



const Like = mongoose.model("Like", likeSchema);

module.exports = { Like };