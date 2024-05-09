const express = require("express");
const TotalMoney = require("../../api/TotalMoney/TotalMoney");
const router = express.Router();

router.get("/total/money", TotalMoney); //getting total money and total cost

module.exports = router;
