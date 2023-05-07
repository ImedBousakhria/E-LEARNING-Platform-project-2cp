const Course = require('../models/Course') ;
const User = require("../models/User");
const Schedule = require('../models/Schedule');
const mongoose = require('mongoose');
const Notification = require('../models/Notification');

// GET all schedules
module.exports.getAllSchedules = async (req, res) => {
    try {
      const schedules = await Schedule.find();
      res.json(schedules);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

// GET a single schedule by id
module.exports.getScheduleById = async (req, res) => {
    try {
        const schedule = await Schedule.findById(req.params.id);
        if (!schedule) {
        return res.status(404).json({ error: "schedule not found" });
        }
        res.json(schedule);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    }; 

// GET all schedules for a course
module.exports.getAllSchedulesForCourse = async (req, res) => {
    try {
        const schedules = await Schedule.find({course: req.params.id});
        res.json(schedules);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    };


// POST create a new schedule
module.exports.createSchedule = async (req, res) => {
    try {
        const schedule = await Schedule.create(req.body);

        if (req.body.course) {
            const course = await Course.findById(req.body.course);
            if (course) {
                course.schedules.push(schedule._id);
                await course.save();
            }
              // Send notifications to teachers and students in the course
      course.teachers.forEach(async teacherId => {
        const teacher = await User.findById(teacherId);
        const notification = new Notification({
          user: teacher._id,
          message: `New schedule "${schedule.title}" created in "${course.title}"`,
        });
  
        await notification.save();
        teacher.notifications.push(notification._id);
        teacher.save();
        });
        
        // send notification to students
        course.students.forEach(async studentId => {
          const student = await User.findById(studentId);
          const notification = new Notification({
            user: student._id,
            message: `New schedule "${schedule.title}" created in "${course.title}"`,
          });
          await notification.save();
          student.notifications.push(notification._id);
          student.save();
        });
        }

        res.status(201).json(schedule);
        console.log("schedule created sucessfully");
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    };

// PATCH update a schedule
module.exports.updateSchedule = async (req, res) => {

    try {
        const _id = req.params.id;
        const schedule = await Schedule.findOneAndUpdate({_id}, req.body, {new: true});
        course = await Course.findById(req.body.course);
        course.teachers.forEach(async teacherId => {
            const teacher = await User.findById(teacherId);
            const notification = new Notification({
              user: teacher._id,
              message: `This schedule "${schedule.title}" is updated in "${course.title}"`,
            });
      
            await notification.save();
            teacher.notifications.push(notification._id);
            teacher.save();
            });
            
            // send notification to students
            course.students.forEach(async studentId => {
              const student = await User.findById(studentId);
              const notification = new Notification({
                user: student._id,
                message: `This schedule "${schedule.title}" updated in "${course.title}"`,
              });
              await notification.save();
              student.notifications.push(notification._id);
              student.save();
            });
        if (!schedule) {
            return res.status(404).json({ error: "schedule not found" });
        }else{
            res.status(200).json(schedule);
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    };


    });

    if (!schedule) {
      return res.status(404).json({ error: "schedule not found" });
    } else {
      res.status(200).json(schedule);
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

    module.exports.deleteSchedule = async (req, res) => {
        try {
    
          const _id = req.params.id;
      
          // Delete the Lesson and associated discussion forum
        
          const deletedSchedule = await Schedule.findByIdAndDelete(_id);
        
           // Remove the Lesson ID from the associated course
        const course = await Course.findOneAndUpdate(
          { schedules: _id }, // 
          { $pull: { schedules: _id } }, 
          { new: true }
        );
          
          if (!deletedSchedule) {
            return res.status(404).json({ message: 'Schedule not found' });
          }
      
          res.status(200).json({ message: 'Schedule deleted successfully' });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };
      

// DELETE all schedules for a course
module.exports.deleteAllSchedulesForCourse = async (req, res) => {
    try {
        const schedules = await Schedule.find({course: req.params.id});
        if (!schedules) {
        return res.status(404).json({ error: "schedules not found" });
        }
        await Schedule.deleteMany({ course: req.params.id });
        res.json({ message: "schedules deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    };

// DELETE all schedules
module.exports.deleteAllSchedules = async (req, res) => {
    try {
        await Schedule.deleteMany();
        res.json({ message: "all schedules deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    };
    

