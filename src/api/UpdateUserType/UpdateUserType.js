const Users = require("../../models/Users/Users");

const UpdateUserType = async(req,res)=>{
    const {type,uid} = req.body;
    // console.log(type,uid);
    const query = {uid:uid};
    const updateType = {type:type};
    const result = await Users.updateOne(query,updateType);
    // console.log(result);
    res.send(result);
}

module.exports = UpdateUserType;
