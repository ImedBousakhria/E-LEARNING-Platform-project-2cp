const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
  members: {
    type: Array,
  },
});

module.exports = mongoose.model('Discussion', discussionSchema);
