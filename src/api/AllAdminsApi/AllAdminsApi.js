const Users = require("../../models/Users/Users");

const AllAdminsApi = async(req,res)=>{
    const query = {type:'admin'};
    const result = await Users.find(query);
    res.send(result);
    // console.log(result);
}

module.exports = AllAdminsApi;