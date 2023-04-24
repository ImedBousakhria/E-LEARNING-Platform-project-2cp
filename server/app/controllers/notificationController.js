const Notification = require('../models/Notification');

exports.addNotification = async (req, res, next) => {
  try {
    const { user, event, eventTitle, message } = req.body;
    const notification = new Notification({ user, event, eventTitle, message });
    await notification.save();
    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getNotifications = async (req, res, next) => {
  try {
    const { user } = req;
    const notifications = await Notification.find({ user }).sort({ createdAt: -1 });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.markNotificationAsRead = async (req, res, next) => {
  try {
    const { id } = req.params;
    const notification = await Notification.findByIdAndUpdate(id, { read: true }, { new: true });
    res.status(200).json(notification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.markAllNotificationsAsRead = async (req, res, next) => {
  try {
    const { user } = req;
    const notifications = await Notification.updateMany({ user }, { read: true });
    res.status(200).json({ message: 'All notifications marked as read' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
