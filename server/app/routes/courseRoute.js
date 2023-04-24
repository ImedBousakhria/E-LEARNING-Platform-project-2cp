
const { Router } = require('express');
const courseController = require('../controllers/courseController');
const { requireAuth } = require('../middleware/userMiddleware');
const { requireTeacherOrAdmin  } = require('../middleware/adminMiddleware');

const router = Router();

// router.get('/course/getAll',requireAuth, courseController.getAllCourses);
// router.get('/course/get/:id',requireAuth, getCourse);
// router.post('/course/create',requireAuth, requireTeacherOrAdmin, postCourse);
// router.put('/course/update/:id',requireAuth, requireTeacherOrAdmin, putCourse);
// router.delete('/course/delete/:id',requireAuth, requireTeacherOrAdmin, deleteCourse);

router.get('/course/getAll', courseController.getAllCourses);
router.get('/course/get/:id', courseController.getCourse);
router.post('/course/create', courseController.postCourse);
router.put('/course/update/:id', courseController.putCourse);
router.delete('/course/delete/:id', courseController.deleteCourse);

module.exports = router;