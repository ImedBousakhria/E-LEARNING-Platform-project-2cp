const { Router } = require('express');
const notificationController = require('../controllers/notificationController');

const router = Router();

router.post('/', notificationController.addNotification);
router.get('/', notificationController.getAllNotifications);
router.put('/read', notificationController.markAllAsRead);
router.put('/read/:id', notificationController.markAsRead);

module.exports = router;
