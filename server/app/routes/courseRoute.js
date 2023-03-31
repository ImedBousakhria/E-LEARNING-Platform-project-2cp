const { Router } = require('express');
const courseController = require('../controllers/courseController');
const { requireGerant } = require('../middleware/adminMiddleware');

const router = Router();

router.get('/lesson/get/:id', courseController.get);
router.post('/lesson/create', requireGerant, courseController.post);
router.put('/lesson/update/:id', requireGerant, courseController.put);
router.delete('/lesson/delete/:id', requireGerant, courseController.delete);


module.exports = router;