const Course = require('../models/Course') ;
const fs = require('fs');
const Lesson = require('../models/Lesson');
const Discussion = require('../models/Discussion');
const Notification = require('../models/Notification');




// GET all Lessons
module.exports.getAllLessons = async (req, res) => {
    try {
      const lessons = await Lesson.find();
      res.json(lessons);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // GET a single Lesson by id
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


// POST create a new Lesson with files
module.exports.createLesson = [
  async (req, res) => {
    try {
       // Check if the request body contains base64 encoded file data
      if (req.body.file) {
        // Decode the base64 data to a Buffer
        const fileData = Buffer.from(req.body.file, 'base64');

        // Create a temporary file to write the Buffer data
        const tempFileName = 'temp_' + Date.now();
        fs.writeFileSync(tempFileName, fileData);

        // Create the file object for multer upload
        const tempFile = {
          originalname: 'Lesson_file',
          mimetype: req.body.mimetype,
          buffer: fs.readFileSync(tempFileName)
        };

        // Add the file object to the request files array
        req.files = [tempFile];
      }

      // Extract the files from the request and add them to the gallery array
      const gallery = req.body.file ? req.files.map(file => ({
        contentType: file.mimetype,
        data: file.buffer,
        // postedBy: req.user._id
      })) : [];

      // Create the Lesson object
      const lesson = new Lesson({
        title: req.body.title,
        description: req.body.description,
        gallery: gallery,
        course: req.body.course || null // Set course to null if not provided
      });

      // Add the new Lesson to the course if course is provided
      if (req.body.course) {
        const course = await Course.findById(req.body.course).populate('teachers').populate('students');
        if (course) {
          course.lessons.push(lesson._id);
          await course.save();
  
          
  
          // send notification to teachers
          course.teachers.forEach(async teacher => {
            const notification = new Notification({
              user: teacher._id,
              sender: req.user._id,
              message: `New lesson ${lesson.title} created in ${course.title}`,
            });
            await notification.save();
            teacher.notifications.push(notification);
            teacher.save();
          });
  
          // send notification to students
          course.students.forEach(async student => {
            const notification = new Notification({
              user: student._id,
              sender: req.user._id,
              message: `New lesson ${lesson.title} created in ${course.title}`,
            });
            await notification.save();
            student.notifications.push(notification);
            student.save();
          });
        }
      }

      // Save the Lesson object
        // Create discussion forum associated with the lesson
         const discussion = new Discussion({
        lesson: lesson._id,
        members: [course.students , course.teachers]
       });
       await discussion.save(); 
       
       //const users = [course.students, course.teachers];

       ////for (const user of users) {
          
      //}
      
       


      // Save the lesson object
      await lesson.save();

      res.json(lesson);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
];

  

// PUT update a Lesson with files
module.exports.updateLesson = [
  async (req, res) => {
    try {

      // Check if the request body contains base64 encoded file data
      if (req.body.file) {
        // Decode the base64 data to a Buffer
        const fileData = Buffer.from(req.body.file, 'base64');

        // Create a temporary file to write the Buffer data
        const tempFileName = 'temp_' + Date.now();
        fs.writeFileSync(tempFileName, fileData);

        // Create the file object for multer upload
        const tempFile = {
          originalname: 'Lesson_file',
          mimetype: req.body.mimetype,
          buffer: fs.readFileSync(tempFileName)
        };

        // Add the file object to the request files array
        req.files = [tempFile];

        
      }
      const lesson = await Lesson.findById(req.params.id);
      // Extract the files from the request and add them to the gallery array
      if (req.body.file) {
        const gallery = req.files.map(file => ({
          contentType: file.mimetype,
          data: file.buffer,
          postedBy: req.user._id
        }));

        lesson.gallery = gallery;
      }


      // Update the Lesson object

      if(req.body.title){
        lesson.title = req.body.title;
      }
      if(req.body.description){
        lesson.description = req.body.description;
      }
      
    
      await lesson.save();

      res.json(lesson);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
];


  // DELETE a Lesson by id
 
  
  module.exports.deleteLesson = async (req, res) => {
    try {

      const _id = req.params.id;
  
      // Delete the Lesson and associated discussion forum
    
      const deletedLesson = await Lesson.findByIdAndDelete(_id);
    
       // Remove the Lesson ID from the associated course
    const course = await Course.findOneAndUpdate(
      { lessons: _id }, // Find the course that has the Lesson ID in its Lessons array
      { $pull: { lessons: _id } }, // Remove the Lesson ID from the Lessons array field
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
  