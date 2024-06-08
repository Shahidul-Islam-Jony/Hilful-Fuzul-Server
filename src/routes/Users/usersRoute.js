const express = require("express");
const users = require("../../api/Users/usersApi");
const singleUserApi = require("../../api/SingleUser/singleUserApi");
const becomeMember = require("../../api/BecomeMember/becomeMemberApi");
const allUsersApi = require("../../api/AllUsers/allUsersApi");
const TotalMemberCountApi = require("../../api/TotalMemberCountApi/TotalMemberCountApi");
const TotalMemberData = require("../../api/TotalMemberData/TotalMemberData");
const SearchMember = require("../../api/SearchMember/SearchMember");
const TotalUsersCountApi = require("../../api/TotalUsersCountApi/TotalUsersCountApi");
const SearchUsersApi = require("../../api/SearchUsersApi/SearchUsersApi");
const UpdateUserType = require("../../api/UpdateUserType/UpdateUserType");
const router = express.Router();

router.post("/users", users); // adding new user
router.get("/single/user/:uid", singleUserApi); //getting single user;
router.patch("/update/user/type",UpdateUserType);     // update user type

// Members Route
router.patch("/become/member/:uid", becomeMember);
router.get("/total/member/count",TotalMemberCountApi);      // total member count
router.get("/total/member",TotalMemberData);    //Getting total members
router.get('/search/member',SearchMember);       // search specific member by name

// Users Route
router.get("/total/users/count",TotalUsersCountApi);   //count total users
router.get("/all/users", allUsersApi); //getting all users;
router.get('/search/users',SearchUsersApi);     //search specific users


module.exports = router;
