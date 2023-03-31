const { Router } = require('express');
const lessonController = require('../controllers/lessonController');
const { requireTeacher } = require('../middleware/adminMiddleware');

const router = Router();


router.get('/lesson/get/:id', lessonController.get);
router.post('/lesson/create', requireTeacher, lessonController.post);
router.put('/lesson/update/:id', requireTeacher, lessonController.put);
router.delete('/lesson/delete/:id', requireTeacher, lessonController.delete);

module.exports = router;