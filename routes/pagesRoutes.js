const router = require("express").Router();
const { index } = require("../controllers/pages_controller");

router.get("/", index);

module.exports = router;
