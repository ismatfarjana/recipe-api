const { getAllUser, getOneUser } = require("../utils/user_utilities");
const passport = require("passport");
const UserModel = require("../models/User.model");

const allUsers = (req, res) => {
  getAllUser(req).exec((err, users) => {
    if (err) {
      res.status(500);
      return res.json({
        error: err.message
      });
    }
    res.send(users);
  });
};

const oneUser = (req, res) => {
  getOneUser(req).exec((err, user) => {
    if (err) {
      res.status(500);
      return res.json({
        error: err.message
      });
    }
    res.send(user);
  });
};

const registrationForm = (req, res) => {
  res.render("auth/register");
};

const createNewRegistration = (req, res, next) => {
  const newUserHandler = user => {
    req.login(user, err => {
      if (err) {
        next(err);
      } else {
        res.redirect("/users");
      }
    });
  };

  const { name, email, password } = req.body;

  UserModel.create({ name, email, password }).then(newUserHandler);
};

const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};

const loginForm = (req, res) => {
  res.render("auth/login");
};

const login = (req, res, next) => {
  const loginFunc = passport.authenticate("local", {
    successRedirect: "/user",
    failureRedirect: "/user/login"
  });
  loginFunc(req, res, next);
};

module.exports = {
  allUsers,
  oneUser,
  registrationForm,
  createNewRegistration,
  logout,
  loginForm,
  login
};
