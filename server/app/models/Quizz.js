const mongoose = require('mongoose');
const { Schema } = mongoose;

const quizzSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  questions: [{
    type: Schema.Types.ObjectId,
    ref: 'Question'
  }],
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  updatedDate: {
    type: Date,
    default: Date.now
  },
  deadline: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Quizz', quizzSchema);
