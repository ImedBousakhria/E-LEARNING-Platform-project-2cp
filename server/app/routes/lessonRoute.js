const { Router } = require('express');
const lessonController = require('../controllers/lessonController');
const { requireTeacherOrAdmin } = require('../middleware/adminMiddleware');
const { requireAuth } = require('../middleware/userMiddleware');
const upload = require('../middleware/uploadMiddleware');

const router = Router();


router.get('/lesson/getAll',lessonController.getAllLessons);
router.get('/lesson/get/:id', lessonController.getLessonById);
router.post('/lesson/create', lessonController.createLesson);
router.put('/lesson/update/:id', lessonController.updateLesson);
router.delete('/lesson/delete/:id', lessonController.deleteLesson);

module.exports = router;