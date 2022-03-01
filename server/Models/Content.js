const mongoose = require("mongoose");
const { User } = require("./User");
const Schema = mongoose.Schema

const contentSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: User,
    },
    title: {
      type: String,
      maxLength: 50,
    },
    category: {
      type: String,
    },
    content: {
      type: String,
    },
    address: {
      type: String,
    },
    latLng: {
      type: Array,
    }
  },
  { timestamps: true }
);

const Content = mongoose.model("Content", contentSchema);

module.exports = { Content };
