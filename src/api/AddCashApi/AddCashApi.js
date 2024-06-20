const Users = require("../../models/Users/Users");

const AddCashApi = async (req, res) => {
  const { uid, amount, cost } = req.body;
  //   console.log(uid,amount,cost);
  const query = { uid: uid };
  if (!cost) {
    //adding cash
    const result = await Users.findOneAndUpdate(
      query,
      { $inc: { cash: amount } },
      { new: true, useFindAndModify: false }
    );

    if (!result) {
      res.send({ message: "Error updating Cash" });
    } else {
      res.send(result);
    }
  } else {
    // adding cost and updating cash
    const user = await Users.findOne(query);
    // console.log('Cash=',user.cost);
    if (user?.cash >= cost) {
      const result = await Users.findOneAndUpdate(
        query,
        { $inc: { cost: cost, cash: -cost } },
        { new: true, useFindAndModify: false }
      );

      if (!result) {
        res.send({ message: "Error updating cost" });
      } else {
        res.send(result);
      }
    }
  }
};

module.exports = AddCashApi;
