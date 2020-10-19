const {
  createOnePost,
  getAllPosts,
  getOnePostById,
  updateOnePostById,
  deleteOnePost,
  commentOnAPostById
} = require("../utils/post_utilities");

//new post form
const newPostForm = res => {
  res.render("post/form");
};

const createNewPost = (req, res) => {
  let post = createOnePost(req);
  if (post) {
    res.status(201);
    res.send(post);
  } else {
    res.status(500);
    res.send(`Error: error while creating post ${req.error}`);
  }
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
    res.send(posts);
  });
};

//one post
const onePost = (req, res) => {
  getOnePostById(req).exec((err, post) => {
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
  let updatedPost = updateOnePostById(req.params.id).then(post => {
    post.title = req.body.title;
    post.description = req.body.description;

    post.save();
  });

  if (updatedPost) {
    res.status(201);
    res.json(updatedPost);
  } else {
    res.status(500);
    res.send(`Error: error while updating post ${req.error}`);
  }
};

// delete post
const deletePost = (req, res) => {
  deleteOnePost(req)
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
    res.send(`Error: error while updating post ${req.error}`);
  }
};

module.exports = {
  allPosts,
  onePost,
  updatePost,
  deletePost,
  newPostForm,
  createNewPost,
  addNewComment
};
