const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/Route");
// const session = require("express-session");
// const passport = require("passport");
// const UserModel = require("./models/Users");
// const OAuth2Strategy = require("passport-google-oauth2").Strategy;
require("dotenv").config();

const app = express();
app.use(cookieParser());

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_LINK,
    credentials: true,
  })
);

app.use("/", authRoute);

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.hbqnya2.mongodb.net/freeCodeCamp`
);

app.listen(3001, () => {
  console.log("Server started on PORT 3001");
});
