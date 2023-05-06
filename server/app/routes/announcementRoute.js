const { Router } = require('express');
const announcementController = require('../controllers/announcementController');
const { requireTeacherOrAdmin } = require('../middleware/adminMiddleware');
const { requireAuth } = require('../middleware/userMiddleware');
const upload = require('../middleware/uploadMiddleware');
const router = Router();

router.get('/announcement/getAll',requireAuth,announcementController.getAllAnnouncements);
router.get('/announcement/get/:id',requireAuth,announcementController.getAnnouncementById);
router.post('/announcement/create',requireAuth,announcementController.createAnnouncement);
router.put('/announcement/update/:id',requireAuth,announcementController.updateAnnouncement);
router.delete('/announcement/delete/:id',requireAuth,announcementController.deleteAnnouncement);


module.exports = router;