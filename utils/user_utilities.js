const UserModel = require("../models/User.model");

const getAllUser = (req, res) => {
  return UserModel.find();
};

const getOneUser = (req, res) => {
  return UserModel.findById(req.params.id);
};

const registerNewUser = (req, res) => {};

module.exports = { getAllUser, getOneUser };
