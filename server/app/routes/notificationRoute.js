const { Router } = require('express');
const notificationController = require('../controllers/notificationController');

const router = Router();

router.post('/notifications/create', notificationController.addNotification);
router.get('/notificatoins/get', notificationController.getNotifications);
router.put('/notificatoins/read', notificationController.markAllNotificationsAsRead);
router.put('/notificatoins/read/:id', notificationController.markNotificationAsRead );
router.post('/notifications/delete', notificationController.deleteNotification);

module.exports = router;