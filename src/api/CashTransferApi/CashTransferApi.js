const { query, response } = require("express");
const Users = require("../../models/Users/Users");

const CashTransferApi = async (req, res) => {
  const { uid, amount } = req.body;
  // console.log(uid,amount);
  const query = { uid: uid };
  const user = await Users.findOne(query);
  user.cash -= amount;
  user.transfer += amount;
  user.save();
  //   console.log(user);
  res.status(200).send({ message: "Cash transfer pending" });
};

module.exports = CashTransferApi;
