const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
  lessonId: { 
    type: mongoose.Schema.Types.ObjectId, ref: 'Lesson'
  },
  members: {
    type: Array,
  },
});

module.exports = mongoose.model('Discussion', discussionSchema);
