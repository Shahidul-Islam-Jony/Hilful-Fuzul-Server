const express = require("express");
const addMoneyApi = require("../../api/AddMoneyApi/addMoneyApi");
const AddCashApi = require("../../api/AddCashApi/AddCashApi");
const CashTransferApi = require("../../api/CashTransferApi/CashTransferApi");
const RecievedMoneyApi = require("../../api/RecievedMoneyApi/RecievedMoneyApi");
const ClearCostApi = require("../../api/ClearCostApi/ClearCostApi");
const router = express.Router();

router.post("/add/money", addMoneyApi);     //for adding money
router.post("/add/cash", AddCashApi);     //for adding money
router.patch("/transfer/cash",CashTransferApi);        // transfering cash

router.patch("/recieved/money",RecievedMoneyApi);      // recieved transfered cash

router.patch("/clear/cost",ClearCostApi)        // clear cost cash of admin

module.exports = router;
