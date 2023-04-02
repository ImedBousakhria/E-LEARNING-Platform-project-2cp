const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    gallery: 
    [{
    contentType: String,
    data: Buffer,
    created: { type: Date, default: Date.now },
    postedBy: {type: mongoose.Schema.ObjectId, ref: 'User'}
    }]
  }, {timestamps: true});
  
const Announcement = mongoose.model("Announcement", announcementSchema);

module.exports = Announcement;