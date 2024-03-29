const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  submittedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  submittedDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  assignment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Assignment',
    required: true
  },
  gallery: [
    {
      contentType: String,
      data: Buffer,
      created: { type: Date, default: Date.now },
      // postedBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
    }
  ]
});

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;
