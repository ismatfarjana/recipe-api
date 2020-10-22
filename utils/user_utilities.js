const UserModel = require("../models/User.model");

const getAllUser = () => {
  return UserModel.find();
};

const getOneUserById = id => {
  return UserModel.findById(id);
};

const deleteOneUserById = id => {
  return UserModel.findByIdAndDelete(id);
};

module.exports = { getAllUser, getOneUserById, deleteOneUserById };
