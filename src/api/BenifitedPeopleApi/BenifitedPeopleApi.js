const TotalCost = require("../../models/AddCost/AddCost");

const BenifitedPeopleApi = async(req,res)=>{
    const result = await TotalCost.find();
    console.log(result);
    res.send(result);
}

module.exports = BenifitedPeopleApi;
