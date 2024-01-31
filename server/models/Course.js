const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  duration: { type: String, required: true },
});

const CourseModel = new mongoose.model("CourseCollection", CourseSchema);

module.exports = CourseModel;
