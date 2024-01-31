const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model("UsersCollection", UserSchema);

module.exports = UserModel;
