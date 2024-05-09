const express = require("express");
const addMoneyApi = require("../../api/AddMoney/AddMoneyApi");
const router = express.Router();

router.post("/add/money", addMoneyApi);     //for adding money

module.exports = router;
