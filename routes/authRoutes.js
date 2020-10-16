const express = require("express");
const router = express.Router();
const {
  allUsers,
  oneUser,
  deleteUser,
  currentUser,
  registrationForm,
  createNewRegistration,
  logout,
  loginForm,
  login
} = require("../controllers/auth_controller");

router.get("/register", registrationForm);
router.post("/register", createNewRegistration);
router.get("/logout", logout);
router.get("/login", loginForm);
router.post("/login", login);

router.get("/:id", oneUser);
router.get("/user_profile", currentUser);
router.delete("/:id", deleteUser);
router.get("/", allUsers);

module.exports = router;
