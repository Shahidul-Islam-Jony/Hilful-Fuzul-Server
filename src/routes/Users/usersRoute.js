const express = require("express");
const users = require("../../api/Users/usersApi");
const singleUserApi = require("../../api/SingleUser/singleUserApi");
const becomeMember = require("../../api/BecomeMember/becomeMemberApi");
const router = express.Router();

router.post("/users", users); // adding new user
router.get("/single/user/:uid", singleUserApi); //getting single user;
router.patch("/become/member/:uid", becomeMember);

module.exports = router;
