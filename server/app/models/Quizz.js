const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema(
  {
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String
    },
    deadline : {
      type: Date,
      required: true
    },
    content: [{
      question: {
        type: String,
        required: true
      },
      options: [{
        text: {
          type: String,
          required: true
        },
        state: {
          type: Boolean,
          required: true
        }
      }]
    }]
  },
  { timestamps: true }
);

const Quizz = mongoose.model("Quizz", quizSchema);
module.exports = Quizz;
