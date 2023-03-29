const mongoose = require("mongoose");

const discussionSchema = new mongoose.Schema({
    lesson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson',
    required: true,
  },
    threads: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'thread',
        required: false,
    }]
  }, {timestamps: true});
  
const Discussion = mongoose.model("Discussion", discussionSchema);

module.exports = Discussion;
