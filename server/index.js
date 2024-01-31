const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/Route");
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

// app.get("/", (req, res) => {
//   res.send("Hello, this is the root route!");
// });

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.hbqnya2.mongodb.net/freeCodeCamp`
);

app.listen(3001, () => {
  console.log("Server started on PORT 3001");
});

// anuragwadhwa786
// MY61aLIAohATOzW3
