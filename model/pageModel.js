const mongoose = require("mongoose");
const pageSchema = require("../schema/pageSchema");

const UserModel = mongoose.model("page", pageSchema);
module.exports = UserModel;
