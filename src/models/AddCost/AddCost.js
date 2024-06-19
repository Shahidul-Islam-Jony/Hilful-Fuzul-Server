const mongoose = require("mongoose");
const { Schema } = mongoose;

const costSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  village: {
    type: String,
    required: true,
  },
  items: {
    type: String,
    required: true,
  },
  itemsPicture: {
    type: String,
  },
  divission: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  money: {
    type: Number,
    required: true,
  },
  addedBy: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
});

const TotalCost = mongoose.model("TotalCost", costSchema); //collection name 'money'
module.exports = TotalCost;
