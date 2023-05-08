const Course = require('../models/Course') ;
const User = require("../models/User");
const multer = require('multer');
const upload = require('../middleware/uploadMiddleware');
const fs = require('fs');
const path = require('path');
const Assignment = require('../models/Assignment');
const Discussion = require('../models/Discussion');
const mongoose = require('mongoose');



const Notification = require('../models/Notification');
const notificationRoute = require('../routes/notificationRoute');

// GET all Assignments
module.exports.getAllAssignments = async (req, res) => {
    try {
      const assignments = await Assignment.find();
      res.json(assignments);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // GET a single Assignment by id
  module.exports.getAssignmentById = async (req, res) => {
    try {
      const assignment = await Assignment.findById(req.params.id)
      .populate("submissions");
      if (!assignment) {
        return res.status(404).json({ error: "Assignment not found" });
      }
      res.json(assignment);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


// POST create a new Assignment with files
module.exports.createAssignment = [
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
          originalname: 'Assignment_file',
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
     
      

      // Create the Assignment object
      const assignment = new Assignment({
        title: req.body.title,
        description: req.body.description,
        deadline: req.body.deadline,
        //postedBy: req.user._id,
        course: req.body.course,
        gallery: gallery,
      });

      // Add the new Assignment to the course if course is provided
      if (req.body.course) {
        const course = await Course.findById(req.body.course);
        if (course) {
          course.assignments.push(assignment._id);
          await course.save();
          

        // send notification to students
        course.students.forEach(async studentId => {
          const student = await User.findById(studentId);
          const notification = new Notification({
            user: student._id,
            message: `New assignment "${assignment.title}" created in "${course.title}"`,

          });
          await notification.save();
          student.notifications.push(notification._id);
          student.save();
        });
  
        }
      }

      // Save the Assignment object
      await assignment.save();

      res.json(assignment);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
];

 

// PUT update a Assignment with files
module.exports.updateAssignment = [
  async (req, res) => {
    try {
      console.log(req);
      // Check if the request body contains base64 encoded file data
      if (req.body.file) {
        // Decode the base64 data to a Buffer
        const fileData = Buffer.from(req.body.file, 'base64');

        // Create a temporary file to write the Buffer data
        const tempFileName = 'temp_' + Date.now();
        fs.writeFileSync(tempFileName, fileData);

        // Create the file object for multer upload
        const tempFile = {
          originalname: 'Assignment_file',
          mimetype: req.body.mimetype,
          buffer: fs.readFileSync(tempFileName)
        };

        // Add the file object to the request files array
        req.files = [tempFile];

        
      }
      const assignment = await Assignment.findById(req.params.id);
      // Extract the files from the request and add them to the gallery array
      if (req.body.file) {
        const gallery = req.files.map(file => ({
          contentType: file.mimetype,
          data: file.buffer,
          // postedBy: req.user.postedBy

        }));

        assignment.gallery = gallery;
      }


      // Update the Assignment object

      if(req.body.title){
        assignment.title = req.body.title;
      }
      if(req.body.description){
        assignment.description = req.body.description;
      }
      if(req.body.deadline){
        assignment.deadline = req.body.deadline;
      }
    

      const course = await Course.findById(req.body.course);
      course.students.forEach(async studentId => {
        const student = await User.findById(studentId);
        const notification = new Notification({
          user: student._id,
          message: `New assignment "${assignment.title}" created in "${course.title}"`,
        });
        await notification.save();
        student.notifications.push(notification._id);
        student.save();
      });

      await assignment.save();
      res.json(assignment);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
];


// DELETE a Assignment by id
 
  
  module.exports.deleteAssignment = async (req, res) => {
    try {

      const _id = req.params.id;
  
      // Delete the Assignment and associated discussion forum
    
      const deletedAssignment = await Assignment.findByIdAndDelete(_id);
    
       // Remove the Assignment ID from the associated course
    const course = await Course.findOneAndUpdate(
      { assignments: _id }, // Find the course that has the Assignment ID in its Assignments array
      { $pull: { assignments: _id } }, // Remove the Assignment ID from the Assignments array field
      { new: true }
    );
      
      if (!deletedAssignment) {
        return res.status(404).json({ message: 'Assignment not found' });
      }
  
      res.status(200).json({ message: 'Assignment deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

