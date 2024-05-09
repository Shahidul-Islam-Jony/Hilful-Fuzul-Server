const Money = require("../../models/AddMoney/AddMoney");

const TotalMoney = async (req, res) => {
  const users = await Money.find();
  //   console.log(users);
  let totalMoney = 0;
  let totalCost = 0;
  users.forEach((user) => {
    user?.money.forEach((amount) => {
      totalMoney += amount;
    });
  });

  //   console.log(totalMoney);

  res.send({ totalMoney, totalCost });
};

module.exports = TotalMoney;
