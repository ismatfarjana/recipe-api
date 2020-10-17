const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    authorId: { type: String, required: true },
    description: { type: String, required: true, minlength: 3 },
    date: { type: Date, required: true },
    comments: [
      {
        comment: { type: String },
        name: { type: String },
        date: { type: Date }
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Post", Post);
