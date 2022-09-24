const mongoose = require("mongoose");
const userSchema = require("../schema/userSchema");

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
