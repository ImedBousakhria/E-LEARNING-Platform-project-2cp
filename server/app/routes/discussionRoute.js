const express = require('express');
const router = express.Router();
const discussionController = require('../controllers/discussionController');
const router = Router();

router.get('/:lessonId/discussion', discussionController.getMessages);
router.post('/:lessonId/discussion', discussionController.postMessage);

module.exports = router;
