const mongoose = require("mongoose");

const Kytty = mongoose.model("Kytty", {
  id: String,
  url: String,
  loveScore: Number,
});

module.exports = Kytty;
