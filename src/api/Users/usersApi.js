const Users = require("../../models/Users/Users");

const users = async (req, res) => {
  const userInfo = req.body;
  // console.log(userInfo);
  const query = { email: userInfo.email };
  const isUserExists = await Users.findOne(query);
  // console.log(isUserExists);
  if (!isUserExists) {
    const result = new Users(userInfo);
    await result.save();
    res.send(result);
  }
  else{
    res.send(isUserExists);
  }
};

module.exports = users;
