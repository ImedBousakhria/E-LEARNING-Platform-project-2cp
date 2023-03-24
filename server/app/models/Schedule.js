const mongoose = require("mongoose");

const schduleSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }
  }, {timestamps: true});
  
const Schdule = mongoose.model("Schdule", schduleSchema);

module.exports = Schdule;