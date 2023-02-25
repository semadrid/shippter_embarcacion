const mongoose = require("mongoose");

//esquema de datos para ships
const shipSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  pos_x: {
    type: Number,
    required: true,
  },
  pos_y: {
    type: Number,
    required: true,
  },
  destiny: {
    type: String,
    required: true,
  },
  pointing_at: {
    type: String,
    required: true,
  },
  sail_date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Ship", shipSchema);
