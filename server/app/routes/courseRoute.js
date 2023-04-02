const { Router } = require('express');
const courseController = require('../controllers/courseController');
const { requireTeacherOrAdmin } = require('../middleware/adminMiddlware');

const router = Router();

router.get('/lesson/get/:id',requireAuth, courseController.get);
router.post('/lesson/create',requireAuth, requireTeacherOrAdmin, courseController.post);
router.put('/lesson/update/:id',requireAuth, requireTeacherOrAdmin, courseController.put);
router.delete('/lesson/delete/:id',requireAuth, requireTeacherOrAdmin, courseController.delete);


module.exports = router;