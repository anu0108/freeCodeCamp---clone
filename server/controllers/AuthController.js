require("dotenv").config();
const UserModel = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.Register = async (req, res) => {
  const { name, dob, email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: "User with this email already exists",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      name,
      dob,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ err });
  }
};

module.exports.Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const foundUser = await UserModel.findOne({ email });

    if (!foundUser) {
      return res.status(400).json({ message: "User doesn't exists" });
    }

    const isPasswordValid = await bcrypt.compare(password, foundUser.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Wrong Credentials" });
    }

    const token = jwt.sign({ id: foundUser._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: 3 * 24 * 60 * 60,
    });

    res.json({ token, userID: foundUser._id });
  } catch (err) {
    res.status(500).json({ err });
    console.log(err);
  }
};
