const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pdf: {
    type:  Schema.Types.Mixed,
    required: true,
  },
  date: [{
    type: Date,
    // required: true,
  }]
}, {timestamps: true});

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;