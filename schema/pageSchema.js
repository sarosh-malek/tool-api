const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema(
  {
    emoji: {
      type: String,
    },
    title: {
      type: String,
      unique: true,
      required: [true, "title is required field"],
    },
    subPages: {
      type: Array,
      required: [true, "subPages equired field"],
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
