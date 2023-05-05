const Course = require('../models/Course') ;
const Lesson = require("../models/Lesson");
const User = require("../models/User");
const multer = require('multer');
const upload = require('../middleware/uploadMiddleware');


// GET get a lesson by id
module.exports.getLesson = async (req, res) => {
    try {
        const lesson = await Lesson.findById(req.params.id);
        res.json(lesson);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    };

// GET get all lessons
module.exports.getAllLessons = async (req, res) => {
    try {
        const lessons = await Lesson.find();
        res.json(lessons);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    };

    module.exports.createLesson = async (req, res) =>{
      try{
         // Extract the files from the request and add them to the gallery array
    if(req.files){
       const gallery = req.files.gallery.map(file => ({
      contentType: file.mimetype,
      data: file.data,
      created: Date.now(),
      postedBy: req.user._id
    }));

    }else(
      console.log("no files found")
    )
   
    // Create the lesson object
    const lesson = new Lesson({
      title: req.body.title,
      description: req.body.description,
      if(gallery){
         gallery: gallery
      }
     
    })


    const savedLesson = await lesson.save();

          res.status(200).json(savedLesson);
          console.log("lesson created sucessfully");
  
      }catch(err){
  
          console.log("Creation lesson failed");
          res.status(500).json({message: err.message});
      }
  
  };
  
// // POST create a new lesson with files
// module.exports.createLesson = [
//     upload.array('gallery'),
//     async (req, res) => {
//       try {
//         // Extract the files from the request and add them to the gallery array
//         const gallery = req.files.map(file => ({
//           contentType: file.mimetype,
//           data: file.buffer,
//           postedBy: req.user._id
//         }));

//         // Create the lesson object
//         const lesson = new Lesson({
//           title: req.body.title,
//           description: req.body.description,
//           gallery: gallery,
//           course: req.body.course
//         })

//         // Add the new lesson to the course
//         const course = await Course.findById(req.body.courseId);
//         course.lessons.push(lesson._id);
//         await course.save();

//         const savedLesson = await lesson.save();
//         res.json(savedLesson);
//       } catch (err) {
//         res.status(400).json({ error: err.message });
//       }
//     }
//   ];

  
// // POST create a new lesson with files
// exports.createLesson = async (req, res) => {
//   try {
//     // Extract the files from the request and add them to the gallery array
//     const gallery = req.files.gallery.map(file => ({
//       contentType: file.mimetype,
//       data: file.data,
//       created: Date.now(),
//       postedBy: req.user._id
//     }));

//     // Create the lesson object
//     const lesson = new Lesson({
//       title: req.body.title,
//       description: req.body.description,
//       gallery: gallery,
//       course: req.body.courseId,

//     })

//     // Add the new lesson to the course
//     const course = await Course.findById(req.body.courseId);
//     course.lessons.push(lesson._id);
//     await course.save();

//     const savedLesson = await lesson.save();
//     res.json(savedLesson);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };