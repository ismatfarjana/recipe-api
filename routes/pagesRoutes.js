const router = require("express").Router();
const { index } = require("../controllers/pages_controller");

router.get("/", index);

module.exports = router;

//app.get("/", (req, res) => {
//   res.send(`welcome to homepage of recipe blog!`);
// });
