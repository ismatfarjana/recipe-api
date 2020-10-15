const index = (req, res) => {
  res.render("home", { message: "welcome to homepage of recipe blog!" });
};
module.exports = { index };
