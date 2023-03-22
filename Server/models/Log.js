const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Title is required"],
  },
  data: {
    type: String,
    required: [true, "Data is required"],
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Log", LogSchema);
