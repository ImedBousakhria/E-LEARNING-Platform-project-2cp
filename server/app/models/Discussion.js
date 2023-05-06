const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const discussionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  messages: [messageSchema],
  lesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Discussion = mongoose.model('Discussion', discussionSchema);

module.exports = Discussion;
