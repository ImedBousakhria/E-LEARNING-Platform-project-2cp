const Notification = require('../models/Notification');
const User = require('../models/User');

exports.addNotification = async (req, res, next) => {
  try {
    const { user, message } = req.body;
    const notification = new Notification({ user, message });
    await notification.save();
    // Find the user and update their notifications array
    const updatedUser = await User.findOneAndUpdate(
      { _id: user },
      { $push: { notifications: notification._id } },
      { new: true }
    );
    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getNotifications = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const notifications = await Notification.find({user: userId}).sort({ createdAt: -1 });//.populate('sender')
     notifications.forEach(notification => {
       notification.read = true
       }); 
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteNotification = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedNotification = await Notification.findByIdAndDelete(id);
    if (!deletedNotification) {
      return res.status(404).json({ message: 'Notification not found' });
    }
    res.status(200).json({ message: 'Notification deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.markNotificationAsRead = async (req, res, next) => {
  try {
    const { id } = req.params;
    const notification = await Notification.findByIdAndUpdate(id, { read: true }, { new: true })
    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }
    res.status(200).json(notification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.markAllNotificationsAsRead = async (req, res, next) => {
  try {
    const { users } = req;
    const notifications = await Notification.updateMany({ users }, { read: true });
    res.status(200).json({ message: 'All notifications marked as read' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
