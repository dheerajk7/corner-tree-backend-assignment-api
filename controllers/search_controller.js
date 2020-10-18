const Job = require("../models/job");

// searching for job with location, pincode and skills
module.exports.search = async function (request, response) {
  try {
    let key = request.params.key.toLowerCase();
    let jobs = await Job.find({
      $or: [
        { pincode: key },
        { location: key },
        { core_skills: { $in: [key] } },
      ],
    });
    return response
      .status(200)
      .json({ message: "Working", data: { jobs: jobs } });
  } catch (err) {
    return response.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
