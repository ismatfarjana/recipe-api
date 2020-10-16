const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("home", { title: "Welcome to Recipe Blog!" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "ABOUT RECIPE BLOG" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact us" });
});

// router.get("/bloggerList", (req, res) => {
//   res.render("bloggerList", { title: "All Bloggers" });
// });

// router.get("*", (req, res) => {
//   res.render("notfound");
// });

module.exports = router;
