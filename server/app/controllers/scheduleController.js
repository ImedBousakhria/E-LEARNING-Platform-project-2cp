const Course = require('../models/Course') ;
const User = require("../models/User");
const Schedule = require('../models/Schedule');
const mongoose = require('mongoose');

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
        if (!schedule) {
            return res.status(404).json({ error: "schedule not found" });
        }else{
            res.status(200).json(schedule);
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    };

// DELETE a schedule
module.exports.deleteSchedule = async (req, res) => {
    try {
        const schedule = await Schedule.findById(req.params.id);
        if (!schedule) {
        return res.status(404).json({ error: "schedule not found" });
        }
        await schedule.deleteOne({ _id: req.params.id });
        res.json({ message: "schedule deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
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


