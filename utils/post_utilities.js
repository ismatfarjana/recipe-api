const PostModel = require("../models/Post.model");

//create
const addPost = req => {
  console.log(req.user);
  const title = req.body.title;
  const author = req.user.name;
  const authorId = req.user._id;
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
const updateOnePostById = (req, res) => {
  return PostModel.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      description: req.body.description
    },
    {
      new: true //why true?? try to remeber :P
    },
    (err, post) => {
      if (err) {
        console.log(err);
      } else {
        res.json(post);
      }
    }
  );
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
