const Money = require("../../models/AddMoney/AddMoney");

const addMoneyApi = async (req, res) => {
  try {
    const userInfo = req.body;
    if (!userInfo || !userInfo.uid || !userInfo.date || !userInfo.money) {
      return res.status(400).send({ error: "Invalid request body" });
    }

    const existingUser = await Money.findOne({ uid: userInfo.uid });

    if (!existingUser) {
      const newUser = new Money(userInfo);
      await newUser.save();
      return res.status(201).send(newUser);
    } else {
      existingUser.date.push(userInfo.date);
      existingUser.money.push(userInfo.money);
      existingUser.lastUpdatedDate = userInfo.lastUpdatedDate;

      await existingUser.save();
      return res.send(existingUser);
    }
  } catch (error) {
    console.error("Error in addMoneyApi:", error);
    return res.status(500).send({ error: "Internal server error" });
  }
};

module.exports = addMoneyApi;
