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

// router.get("/create", (req, res) => {
//   Order.findAll({
//     where: {
//       employee_id: req.session.employee_id,
//     },
//     attributes: [
//       "id",
//       "customer",
//       "coffee_base",
//       "dairy_type",
//       "sweetener_type",
//       "flavor_type",
//     ],
//   }).then((dbOrderData) => {
//     const orders = dbOrderData.map((order) =>
//       order.get({
//         plain: true,
//       }),
//       res.render('neworder', {
//         orders, loggedIn: true,
//       })
//     );
//   }).catch((err) => {
//     res.status(500).json(err);
//   })
  
// });

module.exports = router;
