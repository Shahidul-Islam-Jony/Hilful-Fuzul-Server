const Users = require("../../models/Users/Users");

const SearchMember = async(req,res)=>{
    const searchText =req.query?.search;
    const userType = ["member", "admin", "superAdmin"];
    const member = await Users.find({
        type:userType,
        name:{$regex:searchText,$options:'i'}
    });
    // console.log(member);
    res.send(member);
}

module.exports = SearchMember;
