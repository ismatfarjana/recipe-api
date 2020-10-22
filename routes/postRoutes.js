const router = require("express").Router();
const {
  addNewPost,
  allPosts,
  usersAllPosts,
  currentUsersAllPosts,
  onePost,
  updatePost,
  deletePost,
  addNewComment
} = require("../controllers/posts_controller");

router.post("/", addNewPost);
router.get("/", allPosts);
router.get("/user/:userId", usersAllPosts);
router.get("/usersPosts", currentUsersAllPosts);
router.get("/:id", onePost);
router.put("/:id", updatePost);
router.post("/:id/comments", addNewComment);
router.delete("/:id", deletePost);

module.exports = router;
