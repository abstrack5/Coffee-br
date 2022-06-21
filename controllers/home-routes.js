const router = require("express").Router();
const sequelize = require("../config/connection");
const { Coffee, Dairy, Employee, Flavor, Order, Sweetener } = require("../models");

// router.get("/", (req, res) => {
//   Order.findAll({
//     attributes: [
//       "id",
//       "post_url",
//       "title",
//       "created_at",
      
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
//         include: {
//           model: User,
//           attributes: ["username"],
//         },
//       },
//       {
//         model: User,
//         attributes: ["username"],
//       },
//     ],
//   })
//     .then((dbPostData) => {
//       const posts = dbPostData.map((post) => post.get({ plain: true }));
//       // pass a single post object into the homepage template
//       res.render("homepage", {
//         posts,
//         loggedIn: req.session.loggedIn,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });

//   });

router.get("/", (req, res) => {
  res.render("login");

});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});


module.exports = router;
