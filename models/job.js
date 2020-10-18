const mongoose = require("mongoose");

// creating company model
const jobSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  function: {
    type: String,
  },
  sub_function: {
    type: String,
  },
  company: {
    type: String,
    required: true,
  },
  core_skills: [{ type: String }],
  soft_skills: [{ type: String }],
  location: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  compensation: {
    type: String,
    required: true,
  },
  job_description: {
    type: String,
    required: true,
  },
});

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
