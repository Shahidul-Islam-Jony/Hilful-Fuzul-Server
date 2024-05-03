const express = require("express");
const users = require("../../api/Users/usersApi");
const router = express.Router();

router.post("/users", users);
module.exports = router;
