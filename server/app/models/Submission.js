const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }
  }, {timestamps: true});
  
const Submission = mongoose.model("Submission", submissionSchema);

module.exports = Submission;