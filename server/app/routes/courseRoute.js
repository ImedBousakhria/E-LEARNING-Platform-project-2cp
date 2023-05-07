
const { Router } = require('express');
const courseController = require('../controllers/courseController');
const { requireAuth } = require('../middleware/userMiddleware');
const { requireTeacherOrAdmin  } = require('../middleware/adminMiddleware');

const router = Router();

router.get('/course/getAll', courseController.getAllCourses);
router.get('/course/get/:id', courseController.getCourse);
router.post('/course/create', courseController.postCourse);
router.put('/course/update/:id', courseController.putCourse);
router.delete('/course/delete/:id', courseController.deleteCourse);

module.exports = router;