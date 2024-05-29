const express = require("express");
const TotalMoney = require("../../api/TotalMoney/TotalMoney");
const router = express.Router();

router.get("/total/money/:uid", TotalMoney); //getting total money and total cost && getting own money details

module.exports = router;
