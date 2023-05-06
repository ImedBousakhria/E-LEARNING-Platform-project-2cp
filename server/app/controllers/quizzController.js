const Quizz = require('../models/Quizz');
const Course = require('../models/Course');

// GET all quizzes
module.exports.getAllQuizzes = async (req, res) => {
    try {
      const quizzes = await Quizz.find();
      res.json(quizzes);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

// GET a single quiz by id
module.exports.getQuizzById = async (req, res) => {
    try {
        const quizz = await Quizz.findById(req.params.id);
        if (!quizz) {
        return res.status(404).json({ error: "quiz not found" });
        }
        res.json(quizz);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    };

// GET all quizzes for a course
module.exports.getAllQuizzesForCourse = async (req, res) => {
    try {
        const quizzes = await Quizz.find({course: req.params.id});
        res.json(quizzes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    };

// POST create a new quiz
module.exports.createQuizz = async (req, res) => {
    try {
        const newQuiz = new Quizz({
            name: req.body.name,
            description: req.body.description,
            deadline: req.body.deadline,
            course: req.body.course,
            content: req.body.content
            });

          const course = await Course.findById(req.body.course);
          course.quizzes.push(newQuiz._id);
          await course.save();
     
        const savedQuiz = await newQuiz.save();
        res.status(201).json(savedQuiz);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    };

// PATCH update a quiz
module.exports.updateQuizz = async (req, res) => {
  try{
    const quiz = await Quizz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ error: "quiz not found" });
    }
    const updatedQuizz = await Quizz.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedQuizz);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// // DELETE a quiz
// module.exports.deleteQuizz = async (req, res) => {
//   try {
//     const quizz = await Quizz.findById(req.params.id);
//     if (!quizz) {
//       return res.status(404).json({ error: "quiz not found" });
//     }
//     await quizz.remove();
//     res.json({ message: "quiz deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };



// DELETE a quiz
module.exports.deleteQuizz = async (req, res) => {
  try {

    const _id = req.params.id;

    // Delete the lesson and associated discussion forum
  
    const deletedQuizz = await Quizz.findByIdAndDelete(_id);

     // Remove the lesson ID from the associated course
  const course = await Course.findOneAndUpdate(
    { quizzes: _id }, // Find the course that has the lesson ID in its lessons array
    { $pull: { quizzes: _id } }, // Remove the lesson ID from the lessons array field
    { new: true }
  );
    
    if (!deletedQuizz) {
      return res.status(404).json({ message: 'quizz not found' });
    }

    res.status(200).json({ message: 'quizz deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
