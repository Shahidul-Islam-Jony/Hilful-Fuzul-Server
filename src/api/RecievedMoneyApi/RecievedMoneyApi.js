const Users = require("../../models/Users/Users");

const RecievedMoneyApi = async(req,res)=>{
    const {senderUid,recieverUid} = req.body;
    // console.log(senderUid,recieverUid);
    const query = {uid:senderUid};
    const sender = await Users.findOne(query);
    // console.log(sender);
    const filter = {uid:recieverUid};
    const reciever = await Users.findOne(filter);
    // console.log(reciever);

    reciever.cash += sender.transfer;
    sender.transfer = 0;

    reciever.save();
    sender.save();

    res.status(200).send({message:"Money transfered successful"})
}

module.exports = RecievedMoneyApi;