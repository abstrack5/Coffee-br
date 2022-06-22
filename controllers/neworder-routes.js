const router = require("express").Router();
const { response } = require("express");
const sequelize = require("../config/connection");
const {
  Coffee,
  Dairy,
  Employee,
  Flavor,
  Order,
  Sweetener,
} = require("../models");

router.get("/", (req, res) => {
  res.render("neworder", {
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
