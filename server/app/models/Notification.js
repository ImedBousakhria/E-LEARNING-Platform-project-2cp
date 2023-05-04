const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  message: {
    type: String,
    required: true
  },
  read: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;