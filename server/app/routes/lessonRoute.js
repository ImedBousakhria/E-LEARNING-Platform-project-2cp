const { Router } = require('express');
const lessonController = require('../controllers/lessonController');
// const {smth} = require('../middleware/adminMiddleware');

const router = Router();


router.get('/lesson/get/:id',lessonController.get);
router.post('/lesson/create',lessonController.post);
router.put('/lesson/update/:id',lessonController.put);
router.delete('/lesson/delete/:id',lessonController.delete);

module.exports = router;