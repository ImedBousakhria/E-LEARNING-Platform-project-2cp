const { Router } = require('express');
const commentController = require('../controllers/commentController');
const { requireAuth } = require('../middleware/userMiddleware');
const router = Router();

router.get('/comments/get/:id',requireAuth, commentController.getComment);
router.get('/comments/getAllForAnnouncement/:id',requireAuth, commentController.getAllCommentsForAnnouncement);
router.get('/comments/getAll',requireAuth, commentController.getAllComments);
router.post('/comments/create',requireAuth, commentController.createComment);
router.put('/comments/update/:id',requireAuth, commentController.updateComment);
router.delete('/comments/delete/:id',requireAuth, commentController.deleteComment);


module.exports = router;