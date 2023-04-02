const { Router } = require('express');
const lessonController = require('../controllers/lessonController');
const { requireTeacherOrAdmin } = require('../middleware/adminMiddleware');
const { requireAuth } = require('../middleware/userMiddlware');
const upload = require('../middleware/uploadMiddleware');

const router = Router();


router.get('/lesson/get/:id',requireAuth, lessonController.get);
router.post('/lesson/create', requireAuth, requireTeacherOrAdmin, upload.array('gallery'), lessonController.post);
router.put('/lesson/update/:id',requireAuth, requireTeacherOrAdmin, lessonController.put);
router.delete('/lesson/delete/:id',requireAuth, requireTeacherOrAdmin, lessonController.delete);

module.exports = router;