const mongoose = require("mongoose");

const assegnmentSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }
  }, {timestamps: true});
  
const Assegnment = mongoose.model("Assegnment", assegnmentSchema);

module.exports = Assegnment;