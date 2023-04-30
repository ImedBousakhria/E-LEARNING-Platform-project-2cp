const { Router } = require('express');
const announcementController = require('../controllers/announcementController');
const { requireTeacherOrAdmin } = require('../middleware/adminMiddleware');
const { requireAuth } = require('../middleware/userMiddleware');
const upload = require('../middleware/uploadMiddleware');
const router = Router();

// router.get('/announcement/getAll/',requireAuth, announcementController.getAllAnnouncements);
// router.get('/announcement/get/:id',requireAuth, announcementController.getAnnouncementById);
// router.post('/announcement/create',requireAuth, requireTeacherOrAdmin, upload.array('gallery'), announcementController.createAnnouncement);
// router.put('/announcement/update/:id',requireAuth, requireTeacherOrAdmin, announcementController.updateAnnouncement);
// router.delete('/announcement/delete/:id',requireAuth, requireTeacherOrAdmin, announcementController.deleteAnnouncement);

router.get('/announcement/getAll',announcementController.getAllAnnouncements);
router.get('/announcement/get/:id',announcementController.getAnnouncementById);
// // router.post('/announcement/create', upload.array('gallery'), announcementController.createAnnouncement);
router.post('/announcement/create',announcementController.createAnnouncement);
router.put('/announcement/update/:id',announcementController.updateAnnouncement);
router.delete('/announcement/delete/:id',announcementController.deleteAnnouncement);


module.exports = router;