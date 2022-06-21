const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Employee, Order } = require("../../models");
const withAuth = require('../../utils/auth.js');

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

router.post("/", withAuth, (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  Employee.create({
    username: req.body.username,
    password: req.body.password,
    pin: req.body.pin,
  }).then((dbEmployeeData) => res.json(dbEmployeeData));
  //   req.session.save(() => {
  //     req.session.user_id = dbUserData.id;
  //     req.session.username = dbUserData.username;
  //     req.session.loggedIn = true;

  //     res.json(dbEmployeeData);
  //   });
  // });
});

router.put("/:id", withAuth, (req, res) => {
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
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: "You are now logged in!" });
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

router.delete("/:id", withAuth, (req, res) => {
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
