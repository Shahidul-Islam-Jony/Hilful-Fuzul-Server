const AddCost = require("../../models/AddCost/AddCost");

const AddCostApi = async (req, res) => {
  //   console.log(req.body);
  const donation = req.body;
  const result = new AddCost(donation);
  await result.save();
  res.send(result);
};

module.exports = AddCostApi;
