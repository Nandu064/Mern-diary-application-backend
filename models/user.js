const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  name: String,
});
module.exports = mongoose.model("users", UserSchema, "users");
