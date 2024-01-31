const { Register, Login } = require("../controllers/AuthController");
const { GetCourses, NewCourse } = require("../controllers/CourseController");

const router = require("express").Router();

router.post("/register", Register);
router.post("/login", Login);

router.get("/course", GetCourses);
router.post("/new-course", NewCourse);

module.exports = router;
