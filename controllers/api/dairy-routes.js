const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Dairy, Order } = require("../../models");

// /api/dairies
router.get("/", (req, res) => {
  Dairy.findAll()
    .then((dbDairyData) => res.json(dbDairyData))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
    Dairy.findOne({
    attributes: { type },
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
    .then((dbDairyData) => {
      if (!dbDairyData) {
        res.status(404).json({ message: "No dairy found with this id" });
        return;
      }
      res.json(dbDairyData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
