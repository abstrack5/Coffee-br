const router = require('express').Router();
const sequelize = require("../../config/connection");
const { Employee } = require("../../models");

// /api/users get all users
router.get("/", (req, res) => {
  Employee.findAll({
    attributes: {
      exclude: ["password"],
    },
  })
    .then((dbEmployeeData) => res.json(dbEmployeeData))
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
  })
});

module.exports = router;