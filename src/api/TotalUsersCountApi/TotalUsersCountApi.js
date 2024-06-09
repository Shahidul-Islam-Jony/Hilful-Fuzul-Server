const Users = require("../../models/Users/Users");

const TotalUsersCountApi = async (req, res) => {
  const count = await Users.estimatedDocumentCount();
    // console.log(count);
  res.send({ count });
};

module.exports = TotalUsersCountApi;
