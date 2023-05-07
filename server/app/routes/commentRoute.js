const { Router } = require('express');
const commentController = require('../controllers/commentController');
const { requireAuth } = require('../middleware/userMiddleware');
const router = Router();

router.get('/comments/get/:id', commentController.getComment);
router.get('/comments/getAllForAnnouncement/:id', commentController.getAllCommentsForAnnouncement);
router.get('/comments/getAll', commentController.getAllComments);
router.post('/comments/create', commentController.createComment);
router.put('/comments/update/:id', commentController.updateComment);
router.delete('/comments/delete/:id', commentController.deleteComment);


module.exports = router;