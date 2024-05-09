const Money = require("../../models/AddMoney/AddMoney");
// const Users = require("../../models/Users/Users");

const addMoneyApi = async (req, res) => {
  const userInfo = req.body;
  //   console.log(userInfo);
  const uid = req.body.uid;
  const query = { uid: uid };
  const isExistingUser = await Money.findOne(query);
  if (!isExistingUser) {
    const result = new Money(userInfo);
    await result.save();
    res.send(result);
  } else {
    // console.log(isExistingUser);
    isExistingUser.date.push(userInfo?.date);
    isExistingUser.money.push(userInfo?.money);
    isExistingUser.lastUpdatedDate = userInfo?.lastUpdatedDate;

    const result = await Money.updateOne(
      { uid: userInfo.uid },
      {
        $set: {
          date: isExistingUser?.date,
          money: isExistingUser?.money,
          lastUpdatedDate: isExistingUser?.lastUpdatedDate,
        },
      }
    );
    console.log(result);
  }
};

module.exports = addMoneyApi;
