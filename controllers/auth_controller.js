const {
  getAllUser,
  getOneUserById,
  deleteOneUserById
} = require("../utils/user_utilities");
const passport = require("passport");
const UserModel = require("../models/User.model");

const allUsers = (req, res) => {
  getAllUser()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error while adding new user:" + err));
};

const oneUser = (req, res) => {
  getOneUserById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(500).json("Error while getting one user:" + err));
};

//current user
const currentUser = (req, res) => {
  getOneUserById(req.user._id)
    .then(user => res.json(user))
    .catch(err =>
      res.status(500).json("Error while getting current user:" + err)
    );
};

const deleteUser = (req, res) => {
  deleteOneUserById(req.params.id)
    .then(res.send("user profile is deleted!"))
    .catch(err => res.status(400).json("Error:" + err));
};

// const registrationForm = (req, res) => {
//   res.render("auth/register");
// };

const createNewRegistration = (req, res, next) => {
  const newUserHandler = user => {
    req.login(user, err => {
      if (err) {
        next(err);
      } else {
        // res.redirect("/");
        res.json(user);
      }
    });
  };

  const { name, email, password } = req.body;

  UserModel.create({ name, email, password }).then(newUserHandler);
};

const logout = (req, res) => {
  req.session.destroy(() => {
    res.json("User logged out!");
  });
};

// const loginForm = (req, res) => {
//   res.render("auth/login");
// };

const login = (req, res, next) => {
  const loginFunc = passport.authenticate("local", {
    successRedirect: "/api/users/user_profile",
    failureRedirect: "/users/login"
  });
  loginFunc(req, res, next);
};

module.exports = {
  allUsers,
  oneUser,
  currentUser,
  deleteUser,
  // registrationForm,
  createNewRegistration,
  logout,
  // loginForm,
  login
};
