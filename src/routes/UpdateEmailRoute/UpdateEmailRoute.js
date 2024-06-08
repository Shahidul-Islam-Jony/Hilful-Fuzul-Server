const express = require("express");
const UpdateUserEmailApi = require("../../api/UpdateUserEmailApi/UpdateUserEmailApi");
const router = express.Router();

router.post("/update/email", UpdateUserEmailApi); //update user email without verifing email

module.exports = router;
