const mongoose = require("mongoose");
const { Schema } = mongoose;

const moneySchema = new Schema({
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
  date: {
    type: [String],
    required: true,
  },
  money: {
    type: [Number],
    required: true,
  },
  lastUpdatedDate: {
    type: String,
    required: true,
  },
});

const Money = mongoose.model("money", moneySchema); //collection name 'money'
module.exports = Money;
