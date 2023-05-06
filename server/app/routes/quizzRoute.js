const express = require('express');
const router = express.Router();
const quizzController = require('../controllers/quizzController');
const { requireAuth, checkUser } = require('../middleware/userMiddleware');


router.get('/quizz/getAll',requireAuth, quizzController.getAllQuizzes);
router.get('/quizz/get/:id',requireAuth, quizzController.getQuizzById);
router.get('/quizz/getAllForCourse/:id',requireAuth, quizzController.getAllQuizzesForCourse);
router.post('/quizz/create',requireAuth, quizzController.createQuizz);
router.patch('/quizz/update/:id',requireAuth, quizzController.updateQuizz);
router.delete('/quizz/delete/:id',requireAuth, quizzController.deleteQuizz);

module.exports = router;