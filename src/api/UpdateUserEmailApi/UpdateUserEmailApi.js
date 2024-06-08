const admin = require('../../../admin');
const Users = require("../../models/Users/Users");

const UpdateUserEmailApi = async(req,res)=>{
    const {uid,newEmail} = req.body;
    // console.log(uid,newEmail);
    const query = {email:newEmail};
    const result = await Users.findOne(query);
    if(!result){
        try {
            await admin.auth().updateUser(uid,{
                email:newEmail
            });
            const filter = {uid:uid};
            const updateEmail = {$set:{email:newEmail}};
            await Users.updateOne(filter,updateEmail);
            res.status(200).send("Email updated successfully");
        } catch (error) {
            res.status(400).send('Error updating email:' +error.message);
        }
    }
    else{
        // console.log('Email already exists');
        res.status(400).send('Email already exists');
    }

}

module.exports = UpdateUserEmailApi;