const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
    description: {
      type: String,
      required: true,
    },
    gallery: [
      {
        contentType: String,
        data: Buffer,
        created: { type: Date, default: Date.now },
        // postedBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
      }
    ],
    submittedBy : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    submittedDate: {
      type: Date,
      default: Date.now,
      required: true
    },
    assignment: { type: mongoose.Schema.Types.ObjectId, ref: 'Assignment' }

  }, {timestamps: true});
  
const Submission = mongoose.model("Submission", submissionSchema);

module.exports = Submission;