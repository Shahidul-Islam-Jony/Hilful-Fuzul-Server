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
