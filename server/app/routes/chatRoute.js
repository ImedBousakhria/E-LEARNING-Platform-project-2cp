const { Router } = require('express');
const chatController = require('../controllers/chatController');
const { requireTeacherOrAdmin } = require('../middleware/adminMiddleware');
const { requireAuth } = require('../middleware/userMiddleware');
const upload = require('../middleware/uploadMiddleware');

const router = Router();

router.get('/discussion/get/:id',chatController.getDiscussionById); // :id is the id of the lesson
router.get('/message/getALL/:id', chatController.getMessages); // :id is the id of the lesson
router.post('/discussion/create/:id', chatController.createDiscussion); //put the id of lesson in body
router.post('/message/create/:id', chatController.createMessage); // :id is the id of the lesson


module.exports = router;