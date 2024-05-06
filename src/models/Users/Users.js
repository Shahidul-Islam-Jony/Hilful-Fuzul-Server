const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  // phoneNumber: {
  //   type: Number,
  //   required: true,
  // },
  photoUrl: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
});

const Users = mongoose.model("users", userSchema); //collection name 'users'
module.exports = Users;

//  Update user as member

userSchema.add({
  father: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  village: {
    type: String,
    required: true,
  },
  divission: {
    type: String,
    required: true,
  },
});
