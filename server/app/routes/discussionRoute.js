const express = require('express');
const router = express.Router();
const discussionController = require('../controllers/discussionController');


router.get('/:lessonId/discussion/get', discussionController.getMessages);
router.post('/:lessonId/discussion/create', discussionController.postMessage);
router.post('/:lessonId/discussion/', discussionController.createDiscussion);
router.delete('/:lessonId/discussion/:discussionId', discussionController.deleteDiscussion);

module.exports = router;
