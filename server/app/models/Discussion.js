
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
  lesson: {type: mongoose.Schema.Types.ObjectId, ref: 'Lesson'},
  messages: [messageSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Discussion = mongoose.model('Discussion', discussionSchema);

module.exports = Discussion;
