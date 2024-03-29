const mongoose = require("mongoose");
const Quizz = require("./Quizz");


const courseSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      // required: true
    },
    // coursePhoto: {
    //   data: Buffer,
    //   contentType: String
    // },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    teachers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    created: {
      type: Date,
      default: Date.now
    },
    lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],
    assignments : [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Assignment'
    }],
    announcements  : [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Announcement'
    }],
    quizzes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quizz' }],
    schedules: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Schedule' }]
  }, {timestamps: true});
  
const Course = mongoose.model("Course", courseSchema);

module.exports = Course;