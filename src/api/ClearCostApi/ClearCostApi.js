const Users = require("../../models/Users/Users");

const ClearCostApi = async(req,res)=>{
    const {uid} = req.body;
    // console.log(uid);
    const query = {uid:uid};
    const user = await Users.findOne(query);
    // console.log(user);
    user.cost = 0;
    user.save();
    res.status(200).send({message:"Cost cleared successful"});
}

module.exports = ClearCostApi;
