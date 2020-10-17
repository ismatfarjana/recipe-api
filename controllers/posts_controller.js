const {
  createOnePost,
  getAllPosts,
  getOnePost,
  updateOnePost,
  deleteOnePost
} = require("../utils/post_utilities");

//new post form
const newPostForm = res => {
  res.render("post/form");
};

const createNewPost = (req, res, next) => {
  const newUserHandler = user => {
    req.login(user, err => {
      if (err) {
        next(err);
      } else {
        res.redirect("/");
      }
    });
  };
};

//all post
const allPosts = (req, res) => {
  getAllPosts(req).exec((err, posts) => {
    if (err) {
      res.status(500);
      return res.json({
        error: err.message
      });
    }
    res.render("posts", { posts, user: req.user });
  });
};

//one post
const onePost = (req, res) => {
  getOnePost(req).exec((err, post) => {
    if (err) {
      res.status(500);
      return res.json({
        error: err.message
      });
    }
    res.render("one_post", { post });
  });
};

//update post
const updatePost = (req, res) => {
  updateOnePost(req).exec((err, post) => {
    if (err) {
      res.status(500);
      return res.json({
        error: err.message
      });
    }
    res.render("one_post", { post });
  });
};

// delete post
const deletePost = (req, res) => {
  deleteOnePost(req)
    .then(res.send("Post is deleted!"))
    .catch(err => res.status(400).json("Error:" + err));
};

module.exports = {
  allPosts,
  onePost,
  updatePost,
  deletePost,
  newPostForm,
  createNewPost
};
