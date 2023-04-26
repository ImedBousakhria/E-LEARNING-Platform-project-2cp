const express = require('express');
const router = express.Router();
const quizzController = require('../controllers/quizzController');

// router.get('/quizz/getAll',requireAuth, quizzController.getAllQuizzes);
// router.get('/quizz/get/:id',requireAuth, quizzController.getQuizzById);
// router.post('/quizz/create',requireAuth, requireTeacherOrAdmin, quizzController.createQuizz);
// router.patch('/quizz/update/:id',requireAuth, requireTeacherOrAdmin, quizzController.updateQuizz);
// router.delete('/quizz/delete/:id',requireAuth, requireTeacherOrAdmin, quizzController.deleteQuizz);


router.get('/quizz/getAll', quizzController.getAllQuizzes);
router.get('/quizz/get/:id', quizzController.getQuizzById);
router.post('/quizz/create', quizzController.createQuizz);
router.patch('/quizz/update/:id', quizzController.updateQuizz);
router.delete('/quizz/delete/:id', quizzController.deleteQuizz);

module.exports = router;
