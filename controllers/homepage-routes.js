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
  Order.findAll({
    attributes: [
      "id",
      "employee_id",
      "customer",
      "coffee_base",
      "dairy_type",
      "sweetener_type",
      "flavor_type",
    ],
  }).then((dbOrderData) => {
    const orders = dbOrderData.map((order) => order.get({ plain: true }));
    res.render("homepage", {
      orders,
      loggedIn: true,
    })
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.post("/neworder/create", withAuth, (req, res) => {});

module.exports = router;
