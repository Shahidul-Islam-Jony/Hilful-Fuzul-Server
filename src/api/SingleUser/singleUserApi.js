const Users = require("../../models/Users/Users");
const mongoose = require("mongoose");

const singleUserApi = async (req, res) => {
  const uid = req.params.uid;
  // console.log(uid);
  const query = { uid: uid };
  const result = await Users.findOne(query);
  res.send(result);
};

module.exports = singleUserApi;
