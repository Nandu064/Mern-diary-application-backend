const express = require("express");
const router = express.Router();

router.use("/user", require("./user"));
router.use("/diary", require("./diary"));
router.use("/page", require("./page"));
module.exports = router;
