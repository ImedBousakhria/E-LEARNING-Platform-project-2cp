const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }
  }, {timestamps: true});
  
const Assignment = mongoose.model("Assegnment", assignmentSchema);

module.exports = Assignment;