const mongoose = require("mongoose");
const crypto = require('crypto')

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  gallery: 
  [
    {
  contentType: String,
  data: Buffer,
  created: { type: Date, default: Date.now },
  postedBy: {type: mongoose.Schema.ObjectId, ref: 'User'}
    }
  ],
  comments: [
    {
      text: String,
      created: { type: Date, default: Date.now },
      postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    }
  ],
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