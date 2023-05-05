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

  

exports.createLesson = async (req, res, next) => {

  const { title, description, image, course } = req.body;


  try {
      const result = await cloudinary.uploader.upload(image, {
          folder: "lessons",
          // width: 300,
          // crop: "scale"
      })
      const product = await Lesson.create({
          title,
          description,
          image: {
              public_id: result.public_id,
              url: result.secure_url
          },
          course
      });
      res.status(201).json({
          success: true,
          lesson
      })

  } catch (error) {
      console.log(error);
      next(error);

  }

}

// module.exports.createLesson = async (req, res) => {
//     try {
//       // Extract the lesson details from the JSON body
//       const { title, description, course } = req.body;
  
//       // Check if the request contains a file
//       if (!req.files || Object.keys(req.files).length === 0) {
//         return res.status(400).json({ error: 'No file uploaded' });
//       }
  
//       // Get the file from the request
//       const { file } = req.files;
  
//       // Create a new lesson object with the details and file data
//       const lesson = new Lesson({
//         title,
//         description,
//         gallery: [{
//           contentType: file.mimetype,
//           data: file.data,
//           created: Date.now(),
//         }],
//         course,
//       });
  
//       // Add the new lesson to the course
//       const savedLesson = await lesson.save();
//       const courseToUpdate = await Course.findById(course);
//       courseToUpdate.lessons.push(savedLesson._id);
//       await courseToUpdate.save();
  
//       res.json(savedLesson);
//     } catch (err) {
//       res.status(400).json({ error: err.message });
//     }
//   };
  


