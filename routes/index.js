const express = require("express");
const router = express.Router();
//accessing home controller
var jobController = require("../controllers/job_controller");

//routes
router.use("/api", require("./api/index"));
router.post("/api/v1/create-job", jobController.createJob);
router.get("/api/v1/search/:key", jobController.search);
router.get("/api/v1/jobs", jobController.jobList);

module.exports = router;
