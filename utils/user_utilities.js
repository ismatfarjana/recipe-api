const UserModel = require("../models/User.model");

const getAllUser = (req, res) => {
  return UserModel.find().lean();
};

const getOneUser = (req, res) => {
  return UserModel.findById(req.params.id).lean();
};

const getCurrentUser = id => {
  return UserModel.findById(id).lean();
};

const deleteOneUser = (req, res) => {
  return UserModel.findByIdAndDelete(req.params.id).lean();
};

module.exports = { getAllUser, getOneUser, deleteOneUser, getCurrentUser };
