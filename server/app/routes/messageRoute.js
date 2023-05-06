const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');


router.get('/:lessonId/discussion/', messageController.getMessages);
router.post('/:lessonId/discussion/create', messageController.createMessage);

module.exports = router;
