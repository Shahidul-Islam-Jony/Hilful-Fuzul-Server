const express = require("express");
const users = require("../../api/Users/usersApi");
const singleUserApi = require("../../api/SingleUser/singleUserApi");
const becomeMember = require("../../api/BecomeMember/becomeMemberApi");
const allUsersApi = require("../../api/AllUsers/allUsersApi");
const TotalMemberCountApi = require("../../api/TotalMemberCountApi/TotalMemberCountApi");
const TotalMemberData = require("../../api/TotalMemberData/TotalMemberData");
const SearchMember = require("../../api/SearchMember/SearchMember");
const router = express.Router();

router.post("/users", users); // adding new user
router.get("/single/user/:uid", singleUserApi); //getting single user;
router.patch("/become/member/:uid", becomeMember);
router.get("/all/users/:type", allUsersApi); //getting all users;
router.get("/total/member/count",TotalMemberCountApi);      // total member count
router.get("/total/member",TotalMemberData);    //Getting total members
router.get('/search/member',SearchMember);       // search specific member by name
module.exports = router;
