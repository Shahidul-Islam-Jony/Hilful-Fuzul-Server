const Users = require("../../models/Users/Users");

const allUsersApi = async (req, res) => {
  const type = req.params.type;
  //   console.log(type);
  const query = { type: type };
  const result = await Users.find(query);
  res.send(result);
};

module.exports = allUsersApi;
