const Users = require("../../models/Users/Users");

const UpdateUserType = async(req,res)=>{
    const data = req.body;
    // console.log(data?.imageUrl);
    const query = {uid:data?.uid};
    if(data?.type){
        const updateType = {type:data?.type};
        const result = await Users.updateOne(query,updateType);
        // console.log(result);
        res.send(result);
    }
    else{
        const updateType = {photoUrl:data?.imageUrl};
        const result = await Users.updateOne(query,updateType);
        // console.log(result);
        res.send(result);
    }

}

module.exports = UpdateUserType;
