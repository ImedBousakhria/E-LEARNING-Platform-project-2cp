const { Router } = require('express');
const lessonController = require('../controllers/lessonController');
const { requireTeacherOrAdmin } = require('../middleware/adminMiddleware');
const { requireAuth } = require('../middleware/userMiddleware');
const upload = require('../middleware/uploadMiddleware');

const router = Router();


router.get('/lesson/getAll', requireAuth,lessonController.getAllLessons);
router.get('/lesson/get/:id',requireAuth, lessonController.getLessonById);
router.post('/lesson/create',requireAuth, lessonController.createLesson);
router.put('/lesson/update/:id',requireAuth, lessonController.updateLesson);
router.delete('/lesson/delete/:id',requireAuth, lessonController.deleteLesson);

module.exports = router;