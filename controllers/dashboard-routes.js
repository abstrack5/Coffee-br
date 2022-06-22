const router = require("express").Router();
const sequelize = require("../config/connection");
const {
  Coffee,
  Dairy,
  Employee,
  Flavor,
  Order,
  Sweetener,
} = require("../models");

const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  res.render("dashboard", {
    loggedIn: req.session.loggedIn,
  });
});

router.post("/dashboard/create", withAuth, (req, res) => {
  
});

module.exports = router;
