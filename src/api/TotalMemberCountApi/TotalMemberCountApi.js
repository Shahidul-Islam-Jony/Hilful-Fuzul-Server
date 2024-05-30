const Users = require("../../models/Users/Users");

const TotalMemberCountApi = async (req, res) => {
  const userType = ["member", "admin", "superAdmin"];
  const query = { type: { $in: userType } };
  const count = await Users.countDocuments(query);
  //   console.log(count);
  res.send({ count });
};

module.exports = TotalMemberCountApi;
