const UserModel = require("../models/User.model");
const passport = require("passport");

const getAllUser = (req, res) => {
  return UserModel.find().lean();
};

const getOneUser = (req, res) => {
  return UserModel.findById(req.params.id).lean();
};

const deleteOneUser = (req, res) => {
  return UserModel.findByIdAndDelete(req.params.id).lean();
};

module.exports = { getAllUser, getOneUser, deleteOneUser };
