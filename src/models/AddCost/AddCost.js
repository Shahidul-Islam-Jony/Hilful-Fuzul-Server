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
});

const TotalCost = mongoose.model("TotalCost", costSchema); //collection name 'money'
module.exports = TotalCost;
