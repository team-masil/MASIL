const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { User } = require("./User");
const { Content } = require("./Content")

const commentSchema = mongoose.Schema({  
  writer: {
    type: Schema.Types.ObjectId,
    ref: User,
    required: true
  },
  contentId: {
    type: Schema.Types.ObjectId,
    ref: Content
  },
  // responseTo: {
  //   type: Schema.Types.ObjectId,
  //   ref: User
  // },
  content: {
    type: String
  }
},
  { timestamps: true }
);



const Comment = mongoose.model("Comment", commentSchema);

module.exports = { Comment };
