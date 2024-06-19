const Users = require("../../models/Users/Users");

const AddCashApi = async (req, res) => {
  const { uid, amount } = req.body;
  //   console.log(uid,amount);
  const query = { uid: uid };
  const result = await Users.findOneAndUpdate(
    query,
    {$inc:{cash:amount}},
    {new:true,useFindAndModify: false}
  )

  if(!result){
    res.send({message:'Error updating Cash'});
  }
  else{
    res.send(result);
  }
};

module.exports = AddCashApi;
