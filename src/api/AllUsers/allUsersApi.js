const Users = require("../../models/Users/Users");

const allUsersApi = async(req,res)=>{
    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);
    // console.log(page,size);
    const result = await Users.find().skip(page*size).limit(size);
    // const result = await Users.find();
    // console.log(result);
    res.send(result);
}

module.exports = allUsersApi;