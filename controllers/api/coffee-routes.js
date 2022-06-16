const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Coffee, Order } = require("../../models");

// /api/coffees
router.get("/", (req, res) => {
  Coffee.findAll()
    .then((dbCoffeeData) => res.json(dbCoffeeData))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Employee.findOne({
    attributes: { base, price },
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Order,
        attributes: [
          "id",
          "customer",
          "coffee_base",
          "dairy_type",
          "sweetener_type",
          "flavor_type",
        ],
      },
    ],
  })
    .then((dbCoffeeData) => {
      if (!dbCoffeeData) {
        res.status(404).json({ message: "No coffee found with this id" });
        return;
      }
      res.json(dbCoffeeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
