const Users = require("../../models/Users/Users");

const TotalMemberData = async(req,res)=>{
    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);
    // console.log(page,size);
    const userType = ["member", "admin", "superAdmin"];
    const query = { type: { $in: userType } };
    const result = await Users.find(query).skip(page*size).limit(size);
    // console.log(result);
    res.send(result);
}

module.exports = TotalMemberData;