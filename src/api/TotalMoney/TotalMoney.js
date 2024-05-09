const Money = require("../../models/AddMoney/AddMoney");
const AddCost = require("../../models/AddCost/AddCost");

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

    const benifitedUsers = await AddCost.find();
    // console.log(benifitedUsers);
    benifitedUsers.forEach((user) => {
      totalCost += user?.money;
    });
    // console.log(totalCost);

    totalMoney -= totalCost;

    res.send({ totalMoney, totalCost });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = TotalMoney;
