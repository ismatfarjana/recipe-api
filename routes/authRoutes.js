const express = require("express");
const router = express.Router();
const {
  allUsers,
  oneUser,
  deleteUser,
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
router.get("/", allUsers);
router.get("/:id", oneUser);
router.delete("/:id", deleteUser);

module.exports = router;
