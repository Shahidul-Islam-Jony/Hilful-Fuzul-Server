const express = require("express");
const users = require("../../api/Users/usersApi");
const singleUserApi = require("../../api/SingleUser/singleUserApi");
const router = express.Router();

router.post("/users", users);
router.get('/single/user/:uid',singleUserApi);

module.exports = router;
