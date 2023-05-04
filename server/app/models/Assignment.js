const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
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
    deadline: {
      type: Date,
      required: true,
    },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    submissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Submission' }]

  }, {timestamps: true});
  
const Assignment = mongoose.model("Assegnment", assignmentSchema);

module.exports = Assignment;