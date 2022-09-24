const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: [true, "Required field"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Required field"],
    },
    password: {
      type: String,
      required: [true, "Required field"],
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

module.exports = userSchema;
