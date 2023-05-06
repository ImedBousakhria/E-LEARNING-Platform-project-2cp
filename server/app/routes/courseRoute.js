
const { Router } = require('express');
const courseController = require('../controllers/courseController');
const { requireAuth } = require('../middleware/userMiddleware');
const { requireTeacherOrAdmin  } = require('../middleware/adminMiddleware');

const router = Router();

router.get('/course/getAll',requireAuth, courseController.getAllCourses);
router.get('/course/get/:id',requireAuth, courseController.getCourse);
router.post('/course/create',requireAuth, courseController.postCourse);
router.put('/course/update/:id',requireAuth, courseController.putCourse);
router.delete('/course/delete/:id',requireAuth, courseController.deleteCourse);

module.exports = router;