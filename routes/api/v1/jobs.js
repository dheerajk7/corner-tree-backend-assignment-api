const express = require("express");
const router = express.Router();
var jobController = require("../../../controllers/job_controller");

//routes
router.post("/create-job", jobController.createJob);
router.get("/", jobController.jobList);

module.exports = router;
