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


router.get("/", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
