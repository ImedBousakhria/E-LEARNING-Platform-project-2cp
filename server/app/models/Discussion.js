const mongoose = require("mongoose");

const discussionSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }
  }, {timestamps: true});
  
const Discussion = mongoose.model("Discussion", discussionSchema);

module.exports = Discussion;