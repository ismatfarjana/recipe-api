const router = require("express").Router();
const {
  allPosts,
  onePost,
  updatePost,
  deletePost,
  newPostForm,
  createNewPost,
  addNewComment
} = require("../controllers/posts_controller");

router.get("/newPost", newPostForm);
router.post("/", createNewPost);
router.get("/", allPosts);
router.get("/:id", onePost);
router.put("/:id", updatePost);
router.post("/:id/comments", addNewComment);
router.delete("/:id", deletePost);

module.exports = router;
