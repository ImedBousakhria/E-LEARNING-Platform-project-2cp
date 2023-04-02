const Course = require('../models/Course') ;
const User = require("../models/User");
const multer = require('multer');
const upload = require('../middleware/uploadMiddleware');



// GET all lessons
module.exports.getAllLessons = async (req, res) => {
    try {
      const lessons = await Lesson.find();
      res.json(lessons);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // GET a single lesson by id
  module.exports.getLessonById = async (req, res) => {
    try {
      const lesson = await Lesson.findById(req.params.id);
      if (!lesson) {
        return res.status(404).json({ error: "Lesson not found" });
      }
      res.json(lesson);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  


// POST create a new lesson with files
module.exports.createLesson = [
  upload.array('gallery'),
  async (req, res) => {
    try {
      // Extract the files from the request and add them to the gallery array
      const gallery = req.files.map(file => ({
        contentType: file.mimetype,
        data: file.buffer,
        postedBy: req.user._id
      }));

      // Create the lesson object
      const lesson = new Lesson({
        title: req.body.title,
        description: req.body.description,
        gallery: gallery,
        course: req.body.courseId
      });
      
      // Create discussion forum associated with the lesson
      const discussion = new Discussion({
        lesson: lesson._id,
        messages: []
      });
      await discussion.save();
      
      // Add the new lesson to the course
      const course = await Course.findById(req.body.courseId);
      course.lessons.push(lesson._id);
      await course.save();

      const savedLesson = await lesson.save();
      res.json(savedLesson);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
];

  // PUT update a lesson by ID
module.exports.updateLesson = async (req, res) => {
    try {
      const lessonId = req.params.id;
      const lesson = await Lesson.findById(lessonId);
  
      // Check if the lesson exists
      if (!lesson) {
        return res.status(404).json({ error: 'Lesson not found' });
      }
  
      // Update the lesson with the new data
      lesson.title = req.body.title;
      lesson.description = req.body.description;
  
      // If there are new files, add them to the gallery
      if (req.files && req.files.length > 0) {
        const newFiles = req.files.map(file => ({
          contentType: file.mimetype,
          data: file.buffer,
          postedBy: req.user._id
        }));
        lesson.gallery.push(...newFiles);
      }
  
      // Save the updated lesson
      const savedLesson = await lesson.save();
      res.json(savedLesson);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  // DELETE a lesson by id
  const Lesson = require('../models/Lesson');
  const Discussion = require('../models/Discussion');
  
  module.exports.deleteLesson = async (req, res) => {
    try {
      const { lessonId } = req.params;
  
      // Delete the lesson and associated discussion forum
      const deletedLesson = await Lesson.findByIdAndDelete(lessonId);
      await Discussion.deleteOne({ lesson: lessonId });
  
      // Remove the lesson ID from the associated course
      const course = await Course.findOneAndUpdate(
        { lessons: lessonId },
        { $pull: { lessons: lessonId } },
        { new: true }
      );
  
      if (!deletedLesson) {
        return res.status(404).json({ message: 'Lesson not found' });
      }
  
      res.status(200).json({ message: 'Lesson deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  