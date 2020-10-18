const Job = require("../models/job");

// posting a new job
module.exports.createJob = async function (request, response) {
  try {
    let job = await Job.create({
      role: request.body.role,
      function: request.body.function_value,
      sub_function: request.body.sub_function,
      company: request.body.company,
      location: request.body.location,
      pincode: request.body.pincode,
      compensation: request.body.compensation,
      job_description: request.body.job_description,
      core_skills: request.body.core_skills_list,
      soft_skills: request.body.soft_skills_list,
    });
    if (job) {
      return response
        .status(200)
        .json({ success: true, message: "Job Posted Successfully" });
    } else {
      return response
        .status(400)
        .json({ success: false, message: "Error in posting job" });
    }
  } catch (err) {
    console.log(err);
    return response.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// getting all the jobs available
module.exports.jobList = async function (request, response) {
  let jobs = await Job.find({});
  return response
    .status(200)
    .json({ data: { jobs: jobs }, success: true, message: "Job Fetched" });
};
