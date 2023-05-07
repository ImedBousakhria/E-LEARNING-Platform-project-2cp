const { Router } = require('express');
const announcementController = require('../controllers/announcementController');
const { requireTeacherOrAdmin } = require('../middleware/adminMiddleware');
const { requireAuth } = require('../middleware/userMiddleware');
const upload = require('../middleware/uploadMiddleware');
const router = Router();

router.get('/announcement/getAll',announcementController.getAllAnnouncements);
router.get('/announcement/get/:id',announcementController.getAnnouncementById);
router.post('/announcement/create',announcementController.createAnnouncement);
router.put('/announcement/update/:id',announcementController.updateAnnouncement);
router.delete('/announcement/delete/:id',announcementController.deleteAnnouncement);


module.exports = router;