const Users = require("../../models/Users/Users");

const SearchUsersApi = async (req, res) => {
  const searchText = req.query?.search;
  const member = await Users.find({
    name: { $regex: searchText, $options: "i" },
  });
  // console.log(member);
  res.send(member);
};

module.exports = SearchUsersApi;
