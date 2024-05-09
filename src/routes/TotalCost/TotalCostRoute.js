const express = require("express");
const AddCostApi = require("../../api/AddCostApi/AddCostApi");
const router = express.Router();

router.post('/add/cost',AddCostApi);    //adding donation with people

module.exports = router;
