const router = require("express").Router();
const { request, response } = require("express");
const sequelize = require("../config/connection");
const { Coffee, Dairy, Employee, Flavor, Order, Sweetener } = require("../models");

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
