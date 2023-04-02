const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
  lesson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson',
    required: true,
  },
  messages: [
    {
      text: {
        type: String,
        required: true,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = mongoose.model('Discussion', discussionSchema);
