const express = require("express");
const addMoneyApi = require("../../api/AddMoneyApi/addMoneyApi");
const AddCashApi = require("../../api/AddCashApi/AddCashApi");
const CashTransferApi = require("../../api/CashTransferApi/CashTransferApi");
const router = express.Router();

router.post("/add/money", addMoneyApi);     //for adding money
router.post("/add/cash", AddCashApi);     //for adding money
router.patch("/transfer/cash",CashTransferApi);        // transfering cash

module.exports = router;
