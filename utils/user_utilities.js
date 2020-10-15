const UserModel = require("../models/User.model");
const passport = require("passport");

const getAllUser = (req, res) => {
  return UserModel.find();
};

const getOneUser = (req, res) => {
  return UserModel.findById(req.params.id);
};

const deleteOneUser = (req, res) => {
  return UserModel.findByIdAndDelete(req.params.id);
};

module.exports = { getAllUser, getOneUser, deleteOneUser };
