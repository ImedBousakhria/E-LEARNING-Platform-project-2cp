const express = require('express');
const router = express.Router();
const discussionController = require('../controllers/discussionController');


router.get('/:lessonId/discussion/', discussionController.getMessages);
router.post('/:lessonId/discussion/post', discussionController.postMessage);
router.post('/:lessonId/discussion/create', discussionController.createDiscussion);
router.delete('/:lessonId/discussion/delete', discussionController.deleteDiscussion);

module.exports = router;
