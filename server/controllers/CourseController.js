const CourseModel = require("../models/Course");

module.exports.GetCourses = async (req, res) => {
  try {
    const data = await CourseModel.find({});
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.NewCourse = async (req, res) => {
  const { name, duration } = req.body;

  try {
    const newCourse = new CourseModel({ name, duration });
    await newCourse.save();

    res.json({ message: "New Course Added!" });
  } catch (err) {
    res.status(500).json({ err });
  }
};
