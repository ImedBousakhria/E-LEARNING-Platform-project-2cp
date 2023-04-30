const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    announcementID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Announcement',
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    content: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }
);
const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
