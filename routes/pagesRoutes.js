const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("home", { message: "welcome to homepage of recipe blog!" });
});

module.exports = router;
