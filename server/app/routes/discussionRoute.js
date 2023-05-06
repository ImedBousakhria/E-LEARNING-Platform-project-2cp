const express = require('express');
const router = express.Router();
const discussionController = require('../controllers/discussionController');


router.get('/:lessonId/discussion/', discussionController.getDiscussion);
router.post('/:lessonId/discussion/create', discussionController.createDiscussion);

module.exports = router;
