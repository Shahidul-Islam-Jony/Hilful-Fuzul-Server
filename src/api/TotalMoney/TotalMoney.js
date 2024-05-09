const Money = require("../../models/AddMoney/AddMoney");

const TotalMoney = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = TotalMoney;
