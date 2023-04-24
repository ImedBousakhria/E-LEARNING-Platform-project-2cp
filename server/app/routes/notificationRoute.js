const { Router } = require('express');
const notificationController = require('../controllers/notificationController');

const router = Router();

router.post('/', notificationController.addNotification);
router.get('/', notificationController.getNotifications);
router.put('/read', notificationController.markAllNotificationsAsRead);
router.put('/read/:id', notificationController.markNotificationAsRead );

module.exports = router;
