const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    // required: true,
  },
  color: {
    type: String,
    // required: true,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  startTime: {
    // type: Date,
    type: String,
    required: true,
  },
  endTime: {
    // type: Date, 
    type: String,
    required: true,
  },
  index: {
    type: Number,
    // required: true,
  },
  position: {
    type: Number,
    // required: true,
  },
  span: {
    type: Number,
    // required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;
