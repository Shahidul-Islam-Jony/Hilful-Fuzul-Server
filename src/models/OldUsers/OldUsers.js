const mongoose = require("mongoose");
const { Schema } = mongoose;

const oldUserSchema = new Schema({
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
  father: {           // update user as member
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

const oldUsers = mongoose.model("oldUsers", oldUserSchema); //collection name "oldUsers"
module.exports = oldUsers;

