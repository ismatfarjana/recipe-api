const PostModel = require("../models/Post.model");

const createOnePost = (req, res) => {
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
  return newPost
    .save()
    .then(newPost => console.log(newPost))
    .catch();
};

const getAllPosts = () => {
  return PostModel.find().lean();
};

const getOnePostById = id => {
  return PostModel.findById(id).lean();
};

const updateOnePostById = id => {
  return PostModel.findByIdAndUpdate(id);
};

const deleteOnePost = id => {
  return PostModel.findByIdAndDelete(id).lean();
};

const commentOnAPostById = id => {
  return PostModel.findById(id).lean();
};

module.exports = {
  createOnePost,
  getAllPosts,
  getOnePostById,
  updateOnePostById,
  deleteOnePost,
  commentOnAPostById
};
