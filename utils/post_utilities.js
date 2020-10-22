const PostModel = require("../models/Post.model");

//create
const addPost = req => {
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
const getAllPosts = () => {
  return PostModel.find();
};

const getOnePostById = id => {
  return PostModel.findById(id);
};

const getUsersAllPosts = userId => {
  return PostModel.find({ authorId: userId });
};

//update
const updateOnePostById = id => {
  PostModel.findByIdAndUpdate(id)
    .then(post => {
      post.title = req.body.title;
      post.description = req.body.description;

      return post.save();
    })
    .catch();
};

//delete
const deleteOnePost = id => {
  return PostModel.findByIdAndDelete(id);
};

//add comment
const commentOnAPostById = id => {
  return PostModel.findById(id);
};

module.exports = {
  addPost,
  getAllPosts,
  getOnePostById,
  getUsersAllPosts,
  updateOnePostById,
  deleteOnePost,
  commentOnAPostById
};
