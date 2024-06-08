const Users = require("../../models/Users/Users");
const admin = require("../../../admin");

const DeleteUser = async(req,res)=>{
    const {uid} = req.params;
    // console.log(uid);
    const query = {uid:uid};
    try {
        // delete user from firebase
        await admin.auth().deleteUser(uid);
        // delete user from mongodb
        await Users.findOneAndDelete(query);
        res.status(200).send({message:'User successfully deleted.'});
    } catch (error) {
        res.status(500).send({error:'An error occured while deleting the user'});
    }
}

module.exports = DeleteUser;