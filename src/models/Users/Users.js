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
  father: {
    // update user as member
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
  cash: {
    type: Number,
    default: 0,
    // required: true,
  },
  cost: {
    type: Number,
    default: 0,
    // required: true,
  },
  transfer:{
    type:Number,
    default:0,
  }
});

const Users = mongoose.model("users", userSchema); //collection name 'users'
module.exports = Users;

// update as admin
// userSchema.add({
//   cash: {
//     type: Number,
//     required: true,
//   },
//   cost: {
//     type: Number,
//     required: true,
//   },
// });

//  Update user as member

// userSchema.add({
//   father: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: Number,
//     required: true,
//   },
//   village: {
//     type: String,
//     required: true,
//   },
//   divission: {
//     type: String,
//     required: true,
//   },
// });
