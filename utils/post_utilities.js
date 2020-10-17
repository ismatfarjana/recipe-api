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
  newPost
    .save()
    .then(newPost => res.send(newPost))
    .catch();
};

const getAllPosts = req => {
  return PostModel.find().lean();
};

const getOnePost = id => {
  return PostModel.findById(id).lean();
};

const updateOnePost = req => {
  return PostModel.findByIdAndUpdate(req.params.id)
    .then(post => {
      post.title = req.body.title;
      post.author = req.body.author;
      post.authorId = req.body.authorId;
      post.description = req.body.description;
      post.date = Date.parse(req.body.date);

      post.save().then(post => post);
    })
    .catch(err => res.status(400).json("Error:" + err));
};

const deleteOnePost = id => {
  return PostModel.findByIdAndDelete(id).lean();
};

module.exports = {
  createOnePost,
  getAllPosts,
  getOnePost,
  updateOnePost,
  deleteOnePost
};
