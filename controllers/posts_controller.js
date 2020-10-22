const {
  addPost,
  getAllPosts,
  getOnePostById,
  getUsersAllPosts,
  updateOnePostById,
  deleteOnePost,
  commentOnAPostById
} = require("../utils/post_utilities");

const addNewPost = (req, res) => {
  console.log(req.user);
  addPost(req)
    .then(post => {
      console.log(post);
      console.log("saved post!", post);
      res.json(post);
    })
    .catch(err => res.status(400).json("Error while adding new post:" + err));
};

//all post
const allPosts = (req, res) => {
  getAllPosts(req)
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json("Error while getting all posts:" + err));
};

//users all posts
const usersAllPosts = (req, res) => {
  getUsersAllPosts(req.params.userId)
    .then(posts => res.json(posts))
    .catch(err =>
      res.status(400).json("Error while getting users all posts:" + err)
    );
};

//current users all posts
const currentUsersAllPosts = (req, res) => {
  console.log(req.user);
  getUsersAllPosts(req.user._id)
    .then(posts => res.json(posts))
    .catch(err =>
      res.status(500).json("Error while getting current users all posts:" + err)
    );
};

//one post
const onePost = (req, res) => {
  getOnePostById(req)
    .then(post => res.json(post))
    .catch(err => res.status(500).json("Error while getting one post:" + err));
};

//update post
const updatePost = (req, res) => {
  updateOnePostById(req, res);
};

// delete post
const deletePost = (req, res) => {
  deleteOnePost(req.params.id)
    .then(res.send("Post is deleted!"))
    .catch(err => res.status(400).json("Error:" + err));
};

//add comment
const addNewComment = (req, res) => {
  // get the blog for :id
  let addComment = commentOnAPostById(req.params.id).then(addComment => {
    // create a comments array with new comment
    const comments = addComment.comments.concat({
      comment: req.body.comment,
      name: req.body.name
    });

    // update the blog comments array
    addComment.comments = comments;

    //save the blog with updated comments
    addComment.save();
  });
  if (addComment) {
    res.status(201);
    res.json(addComment);
  } else {
    res.status(500);
    res.send(`Error: error while adding comment: ${req.error}`);
  }
};

module.exports = {
  addNewPost,
  allPosts,
  usersAllPosts,
  currentUsersAllPosts,
  onePost,
  updatePost,
  deletePost,
  addNewComment
};
