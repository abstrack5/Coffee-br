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



router.get("/", (req, res) => {
  res.render("login");
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/homepage");
    return;
  }
  res.render("login", {
    loggedIn: req.session.loggedIn,
  });
});

// router.get("/", (req, res) => {
//   res.render("homepage");
// });

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
