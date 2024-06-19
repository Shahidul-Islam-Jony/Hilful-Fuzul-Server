const express = require("express");
const addMoneyApi = require("../../api/AddMoneyApi/addMoneyApi");
const AddCashApi = require("../../api/AddCashApi/AddCashApi");
const router = express.Router();

router.post("/add/money", addMoneyApi);     //for adding money
router.post("/add/cash", AddCashApi);     //for adding money

module.exports = router;
