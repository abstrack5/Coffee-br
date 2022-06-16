const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Flavor, Order } = require("../../models");

// /api/flavors
router.get("/", (req, res) => {
    Flavor.findAll()
    .then((dbFlavorData) => res.json(dbFlavorData))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
    Flavor.findOne({
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
    .then((dbFlavorData) => {
      if (!dbFlavorData) {
        res.status(404).json({ message: "No flavor found with this id" });
        return;
      }
      res.json(dbFlavorData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;