// const { findById, create, findOneAndUpdate, findOneAndDelete } = require('../models/Course');
// const { findById: _findById } = require("../models/User");

const Course = require('../models/Course');
const User = require('../models/User');
const Lesson = require('../models/Lesson');
const Quizz = require('../models/Quizz');
const Announcement = require('../models/Announcement');
const Assignment = require('../models/Assignment');
const Notification = require('../models/Notification');

module.exports.getAllCourses = async (req, res)=>{
    try{

        const courses = await Course.find().populate('announcements').populate('quizzes').populate('lessons').populate('teachers').populate('students').populate('assignments').populate('schedules');

        res.status(200).json(courses);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

module.exports.getCourse = async (req, res)=>{
    const _id = req.params.id;
    try{
        const course = await Course.findById({_id})
        .populate('quizzes') 
        .populate('lessons')
        .populate('teachers')
        .populate('students')
        .populate('announcements')
        .populate('assignments')
        .populate('schedules')
        .populate('announcements');

        if(course){
            res.status(200).json(course);
            console.log("Course found");
        }else{
            res.status(404).json("Not found");
        }

    }catch(err){
        res.status(500).json({message: err.message});
    }
}

module.exports.postCourse = async (req, res)=>{
   

    try{
        //create the course document
        const course = await Course.create(req.body);
 
        // add to teachers
        if (req.body.teachers) {
            req.body.teachers.forEach(async (teacherID) => {
              const teacher = await User.findById(teacherID);
              teacher.courses.push({ courseID: course._id });

              teacher.save();
            });
          }
          
          if (req.body.students) {
            req.body.students.forEach(async (studentID) => {
              const student = await User.findById(studentID);
              student.courses.push({ courseID: course._id });
              student.save();
            });
          }

          const admins = await User.find({isAdmin: true});
          admins.forEach(async (admin) => {
          admin.courses.push({ courseID: course._id });
          admin.save();
        });


        res.status(200).json(course);
    }catch(err){
        console.log("creation failed ");
        res.status(500).json({message: err.message});

    }
  };
   

// module.exports.putCourse = async (req, res) => {
//   const _id = req.params.id;
//   try {
//     const course = await Course.findOneAndUpdate({ _id }, req.body);

//     if (course) {
//       // add to teachers
//       if (req.body.teachers) {
//         req.body.teachers.forEach(async (teacherID) => {
//           const teacher = await User.findById(teacherID);
//           teacher.courses.push({ courseID: course._id });
//           teacher.save();
//         });
//       }

//       //add to students
//       if (req.body.students) {
//         req.body.students.forEach(async (studentID) => {
//           const student = await User.findById(studentID);
//           student.courses.push({ courseID: course._id });
//           const notification = new Notification({
//             user: student._id,
//             sender: "645793ffff441f996d86dc0b",
//             message: `New ${course.title} created`
//           });
//           await notification.save();
//           student.notifications.push(notification._id);
//           student.save();
//         });
//       }

//       res.status(200).json(course);
//       console.log("course update succeed");
//     } else {
//       res.status(404).json({ message: "Course not found" });
//     }
//   } catch (err) {
//     console.log("course update failed");
//     res.status(500).json({ message: err.message });
//   }
// };


module.exports.putCourse = async (req, res) => {
  const _id = req.params.id;
  try {
    const course = await Course.findOneAndUpdate({ _id }, req.body);

    if (course) {
      // add to teachers
      if (req.body.teachers) {
        req.body.teachers.forEach(async (teacherID) => {
          const teacher = await User.findById(teacherID);
          teacher.courses.push({ courseID: course._id });
          teacher.save();
        });
      }

      //add to students
      if (req.body.students) {
        req.body.students.forEach(async (studentID) => {
          const student = await User.findById(studentID);
          student.courses.push({ courseID: course._id });
          student.save();
        });
      }

      res.status(200).json(course);
      console.log("course update succeed");
    } else {
      res.status(404).json({ message: "Course not found" });
    }
  } catch (err) {
    console.log("course update failed");
    res.status(500).json({ message: err.message });
  }
};

module.exports.deleteCourse = async (req, res) => {
  const _id = req.params.id;
  try {
    const course = await Course.findOneAndDelete({ _id }, req.body);
    if (course) {
      console.log("course deleted");
      res.status(200).json(course);
    } else {
      res.status(401).send({ message: "course not found" });
    }
  } catch (err) {
    console.log("suppression failed");
    res.status(500).json({ message: err.message });
  }
} ; 
