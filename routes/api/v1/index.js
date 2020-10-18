const express = require("express");
const router = express.Router();

router.use("/jobs", require("./jobs"));
router.use("/search", require("./search"));

module.exports = router;
