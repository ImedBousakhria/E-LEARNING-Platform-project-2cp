const mongoose = require("mongoose");
const crypto = require('crypto')

const courseSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    // courseCode: {
    //   type: String,
    //   required: 'Course code is required.',
    //   unique: 'Course code already exists.',
    // },
    coursePhoto: {
      data: Buffer,
      contentType: String
    },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    teachers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }],
    created: {
      type: Date,
      default: Date.now
    },
    lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],
    assignments : [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Assigment'
    }],
    announcements  : [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Announcement '
    }]
  }, {timestamps: true});
  
const Course = mongoose.model("Course", courseSchema);

module.exports = Course;