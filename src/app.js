const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://hilful-fuzul-shanti-songho.web.app",
      "https://hilful-fuzul-shanti-songho.firebaseapp.com",
      "http://localhost",
      "file://"
    ],
    credentials: true,
  })
);
app.use(express.json());

// Router integration
const Users = require("./routes/Users/usersRoute");
const Money = require("./routes/Money/moneyRoute");
const totalMoney = require("./routes/TotalMoney/totalMoneyRoute");
const totalCost = require("./routes/TotalCost/TotalCostRoute");
const updateEmail = require("./routes/UpdateEmailRoute/UpdateEmailRoute");
const benifitedPeople = require("./routes/BenifitedPeopleRoute/BenifitedPeopleRoute");

// calling router
app.use(Users);
app.use(Money);
app.use(totalMoney);
app.use(totalCost);
app.use(updateEmail);
app.use(benifitedPeople);


// basic setup
app.get("/", (req, res) => {
  res.send("Hilful Fuzul server is running smoothly");
});

app.all("*", (req, res, next) => {
  const error = new Error(`The requested URL is invalid : [${req.url}]`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    message: err.message,
  });
});

module.exports = app;
