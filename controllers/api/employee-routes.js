const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Employee, Order } = require("../../models");
const withAuth = require("../../utils/auth.js");

// /api/employees
router.get("/", (req, res) => {
  Employee.findAll({
    attributes: {
      exclude: ["password"],
    },
  })
    .then((dbEmployeeData) => res.json(dbEmployeeData))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Employee.findOne({
    attributes: { exclude: ["password"] },
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
    .then((dbEmployeeData) => {
      if (!dbEmployeeData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbEmployeeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  Employee.create({
    username: req.body.username,
    password: req.body.password,
    pin: req.body.pin,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.password = dbUserData.password;
        req.session.pin = dbUserData.pin;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  Employee.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbEmployeeData) => {
      if (!dbEmployeeData) {
        res.status(404).json({ message: "No employee found with this id" });
        return;
      }
      res.json(dbEmployeeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// login and logout

router.post("/login", (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((dbEmployeeData) => {
    if (!dbEmployeeData) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }

    const validPassword = dbEmployeeData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    req.session.save(() => {
      req.session.employee_id = dbEmployeeData.id;
      req.session.username = dbEmployeeData.username;
      req.session.loggedIn = true;

      res.json({ user: dbEmployeeData, message: "You are now logged in!" });
    });
  });
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.delete("/:id", (req, res) => {
  Employee.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbEmployeeData) => {
      if (!dbEmployeeData) {
        res.status(404).json({ message: "No employee found with this id" });
        return;
      }
      res.json(dbEmployeeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
