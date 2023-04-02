const { Router } = require('express');
const announcementController = require('../controllers/announcementController');
const { requireTeacherOrAdmin } = require('../middleware/teacherMiddlware');
const { requireAuth } = require('../middleware/userMiddlware');
const upload = require('../middleware/uploadMiddleware');
const router = Router();

router.get('/announcement/getAll/',requireAuth, announcementController.getAnnouncements);
router.get('/announcement/get/:id',requireAuth, announcementController.getAnnouncementById);
router.post('/announcement/create',requireAuth, requireTeacherOrAdmin, upload.array('gallery'), announcementController.createAnnouncement);
router.put('/announcement/update/:id',requireAuth, requireTeacherOrAdmin, announcementController.updateAnnouncement);
router.delete('/announcement/delete/:id',requireAuth, requireTeacherOrAdmin, announcementController.deleteAnnouncement);


module.exports = router;