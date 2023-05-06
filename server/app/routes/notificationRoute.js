const { Router } = require('express');
const notificationController = require('../controllers/notificationController');

const router = Router();

router.post('/notifications/create', notificationController.addNotification);
router.get('/notifications/get/:id', notificationController.getNotifications);
router.put('/notifications/read', notificationController.markAllNotificationsAsRead);
router.put('/notifications/read/:id', notificationController.markNotificationAsRead );
router.post('/notifications/delete', notificationController.deleteNotification);

module.exports = router;