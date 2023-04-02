const Quiz = require('../models/quiz');

// POST create a new quiz
module.exports.createQuiz = (req, res) => {
  const quiz = new Quiz({
    title: req.body.title,
    description: req.body.description,
    questions: req.body.questions,
    deadline: req.body.deadline,
    createdBy: req.user._id
  });

  quiz.save()
    .then(savedQuiz => res.json(savedQuiz))
    .catch(err => res.status(400).json({ error: err.message }));
};

// GET list all quizzes
module.exports.getAllQuizzes = (req, res) => {
  Quiz.find()
    .then(quizzes => res.json(quizzes))
    .catch(err => res.status(400).json({ error: err.message }));
};

// GET retrieve a quiz by id
module.exports.getQuizById = (req, res) => {
  Quiz.findById(req.params.id)
    .then(quiz => res.json(quiz))
    .catch(err => res.status(400).json({ error: err.message }));
};

// PUT update a quiz
module.exports.updateQuiz = (req, res) => {
  Quiz.findById(req.params.id)
    .then(quiz => {
      quiz.title = req.body.title || quiz.title;
      quiz.description = req.body.description || quiz.description;
      quiz.questions = req.body.questions || quiz.questions;
      quiz.deadline = req.body.deadline || quiz.deadline;
      quiz.updatedAt = Date.now();
      return quiz.save();
    })
    .then(updatedQuiz => res.json(updatedQuiz))
    .catch(err => res.status(400).json({ error: err.message }));
};

// DELETE delete a quiz
module.exports.deleteQuiz = (req, res) => {
  Quiz.findByIdAndDelete(req.params.id)
    .then(deletedQuiz => res.json(deletedQuiz))
    .catch(err => res.status(400).json({ error: err.message }));
};
