const express = require('express');
const router = express.Router();
const quizzController = require('../controllers/quizzController');


router.get('/quizz/getAll', quizzController.getAllQuizzes);
router.get('/quizz/get/:id', quizzController.getQuizzById);
router.get('/quizz/getAllForCourse/:id', quizzController.getAllQuizzesForCourse);
router.post('/quizz/create', quizzController.createQuizz);
router.patch('/quizz/update/:id', quizzController.updateQuizz);
router.delete('/quizz/delete/:id', quizzController.deleteQuizz);

module.exports = router;