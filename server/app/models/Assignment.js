const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  deadline: {
    // type: Date,
    type: String,
    required: true
  },
  submissions: 
  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Submission' }],
  gallery: [
    {
      contentType: String,
      data: Buffer,
      created: { type: Date, default: Date.now },
    }
  ],
  course: { 
    type: mongoose.Schema.Types.ObjectId,
     ref: 'Course'
   },
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;