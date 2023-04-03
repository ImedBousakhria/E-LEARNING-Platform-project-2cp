const Notification = require('../models/notification');

exports.getNotifications = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const notifications = await Notification.find({ user: userId });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.markAllAsRead = async (req, res, next) => {
  try {
    const userId = req.user._id;
    await Notification.updateMany({ user: userId }, { read: true });
    res.status(200).json({ message: 'All notifications marked as read.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.markAsRead = async (req, res, next) => {
  try {
    const notificationId = req.params.id;
    const notification = await Notification.findOne({ _id: notificationId });
    if (!notification) {
      return res.status(404).json({ message: 'Notification not found.' });
    }
    notification.read = true;
    await notification.save();
    res.status(200).json(notification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
