const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Sweetener, Order } = require("../../models");

// /api/sweeteners
router.get("/", (req, res) => {
    Sweetener.findAll()
    .then((dbSweetenerData) => res.json(dbSweetenerData))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
    Sweetener.findOne({
    attributes: [ "type" ],
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
    .then((dbSweetenerData) => {
      if (!dbSweetenerData) {
        res.status(404).json({ message: "No sweetener found with this id" });
        return;
      }
      res.json(dbSweetenerData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;