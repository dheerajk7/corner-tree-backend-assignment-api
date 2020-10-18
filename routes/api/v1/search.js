const express = require("express");
const router = express.Router();
var searchController = require("../../../controllers/search_controller");

//routes
router.get("/:key", searchController.search);

module.exports = router;
