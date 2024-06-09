const express = require("express");
const BenifitedPeopleApi = require("../../api/BenifitedPeopleApi/BenifitedPeopleApi");
const router = express.Router();

router.get('/benifited/people',BenifitedPeopleApi);        //get all benifited people from total cost

module.exports = router;
