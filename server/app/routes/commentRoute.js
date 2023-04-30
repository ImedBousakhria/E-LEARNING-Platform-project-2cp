const { Router } = require('express');
const commentController = require('../controllers/commentController');
const { requireAuth } = require('../middleware/userMiddleware');
const router = Router();

// router.get('/announcements/:id/comments', requireAuth, commentController.getCommentsForAnnouncement);
// router.post('/announcements/:id/comments', requireAuth, commentController.createCommentForAnnouncement);
// router.put('/announcements/:announcementId/comments/:commentId', requireAuth, commentController.updateCommentForAnnouncement);
// router.delete('/announcements/:announcementId/comments/:commentId', requireAuth, commentController.deleteCommentForAnnouncement);

router.get('/announcement/:announcementId/comments', commentController.getComments);
router.post('/announcement/:announcementId/createComment', commentController.createComment);
router.put('/announcement/:announcementId/comments/:commentId', commentController.updateComment);
router.delete('/announcement/:announcementId/comments/:commentId', commentController.deleteComment);


module.exports = router;