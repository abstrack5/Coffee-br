const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Employee, Order } = require("../../models");

// /api/orders
router.get("/", (req, res) => {
    Order.findAll({
        attributes: [
            "employee_id",
            "customer",
            "coffee_base",
            "dairy_type",
            "sweetener_type",
            "flavor_type"
        ],
    })
        .then((dbOrderData) => res.json(dbOrderData))
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
});

router.get("/:id", (req, res) => {
    Order.findOne({
        attributes: [
            "employee_id",
            "customer",
            "coffee_base",
            "dairy_type",
            "sweetener_type",
            "flavor_type"
        ], where: {
            id: req.params.id,
        },
        include: [
            {
                model: Employee,
                attributes: [
                    "id",
                    "username",
                ],
            },
        ],
    })
        .then((dbOrderData) => {
            if (!dbOrderData) {
                res.status(404).json({ message: "No order found with this id" });
                return;
            }
            res.json(dbOrderData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post("/", (req, res) => {
    Order.create({
        employee_id: req.body.employee_id,
        customer: req.body.customer,
        coffee_base: req.body.coffee_base,
        dairy_type: req.body.dairy_type,
        sweetener_type: req.body.sweetener_type,
        flavor_type: req.body.flavor_type
    }).then((dbOrderData) => res.json(dbOrderData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put("/:id", (req, res) => {
    Order.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
        .then((dbOrderData) => {
            if (!dbOrderData) {
                res.status(404).json({ message: "No order found with this id" });
                return;
            }
            res.json(dbOrderData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.delete("/:id", (req, res) => {
    Order.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((dbOrderData) => {
            if (!dbOrderData) {
                res.status(404).json({ message: "No order found with this id" });
                return;
            }
            res.json(dbOrderData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
