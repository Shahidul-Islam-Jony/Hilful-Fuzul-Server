const Users = require("../../models/Users/Users");

const allUsersApi = async (req, res) => {
  const type = req.params.type;
  //   console.log(type);
  if (type === "member") {
    const query = { type: { $ne: "user" } };    // jader type user na tader k khujbe
    const result = await Users.find(query);
    res.send(result);
  }
};

module.exports = allUsersApi;
