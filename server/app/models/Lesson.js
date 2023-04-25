const mongoose = require("mongoose");


const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  gallery: [
    {
      contentType: String,
      data: Buffer,
      created: { type: Date, default: Date.now },
      // postedBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
    }
  ],
  // gallery: 
  // [
  //   {
  // contentType: String,
  // data: Buffer,
  // created: { type: Date, default: Date.now },
  // postedBy: {type: mongoose.Schema.ObjectId, ref: 'User'}
  //   }
  // ],
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  discussionForum: { type: mongoose.Schema.Types.ObjectId, ref: 'DiscussionForum' },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
  },
}, {timestamps: true});

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;