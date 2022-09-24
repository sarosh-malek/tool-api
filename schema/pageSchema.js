const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: [true, "Required field"],
    },
    subPages: {
      type: Array,
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

module.exports = pageSchema;
