const PostModel = require("../models/Post.model");

//create
const addPost = (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const authorId = req.body.authorId;
  const description = req.body.description;
  const date = Date.parse(req.body.date);
  const newPost = new PostModel({
    title,
    author,
    authorId,
    description,
    date
  });
  return newPost.save();
};

//read
const allPosts = () => {
  return PostModel.find().lean();
};

const onePostById = id => {
  return PostModel.findById(id).lean();
};

const getUsersAllPosts = userId => {
  return PostModel.find({ authorId: userId }).lean();
};

//update
const updateOnePostById = id => {
  return PostModel.findByIdAndUpdate(id);
};

//delete
const deleteOnePost = id => {
  return PostModel.findByIdAndDelete(id).lean();
};

//add comment
const commentOnAPostById = id => {
  return PostModel.findById(id).lean();
};

module.exports = {
  addPost,
  allPosts,
  onePostById,
  getUsersAllPosts,
  updateOnePostById,
  deleteOnePost,
  commentOnAPostById
};
