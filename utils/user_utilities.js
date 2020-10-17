const UserModel = require("../models/User.model");

const getAllUser = () => {
  return UserModel.find().lean();
};

const getOneUserById = id => {
  return UserModel.findById(id).lean();
};

const deleteOneUserById = id => {
  return UserModel.findByIdAndDelete(id).lean();
};

module.exports = { getAllUser, getOneUserById, deleteOneUserById };
