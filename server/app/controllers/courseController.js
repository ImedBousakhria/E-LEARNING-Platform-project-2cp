
// const { findById, create, findOneAndUpdate, findOneAndDelete } = require('../models/Course');
// const { findById: _findById } = require("../models/User");
const Course = require('../models/Course');
const User = require('../models/User');

module.exports.getAllCourses = async (req, res)=>{
    try{
        const courses = await Course.find();
        res.status(200).json(courses);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

module.exports.getCourse = async (req, res)=>{
    const _id = req.params.id;
    try{
        const course = await Course.findById({_id})
        // .populate('teachers', 'firstName lastName')
        // .populate('students', 'firstName lastName')

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
 
        
        //add to main teacher (if there is only one)

        // const teacher = await User.findById(req.body.teacher);
        // mainManager.course.push({courseID: course._id});
        // // mainManager.course.push({courseID: course._id, role: "main-manager"});
        // mainManager.save();

        
        // add to teachers
        req.body.teachers.forEach(async teacherID => {
            const teacher = await User.findById(teacherID);
            teacher.courses.push({courseID: course._id});
            teacher.save();
        })


        //add to students
        req.body.students.forEach(async studentID => {
            const student = await User.findById(studentID);
            student.courses.push({courseID: course._id});
            student.save();
        })

        // //add to lessons
        // req.body.lessons.forEach(async lessonID => {
        //     const lesson = await Lesson.findById(lessonID);
        //     lesson.course.push({lessonID: lesson._id});
        //     lesson.save();

        // })

        // //add to assignments
        // req.body.assignments.forEach(async assignmentID => {
        //     const assigment = await Assignment.findById(assignmentID);
        //     assigment.course.push({assigmentID: assigment._id});
        //     assigment.save();

        // })

        // //add to annoucements
        // req.body.announcements.forEach(async annoucementID => {
        //     const annoucement = await Announcement.findById(annoucementID);
        //     annoucement.course.push({annoucementID: annoucement._id});
        //     annoucement.save();

        // })

        res.status(200).json(course);
    }catch(err){
        console.log("creation failed ");
        res.status(500).json({message: err.message});
    }

}

module.exports.putCourse = async(req, res)=>{
    const _id = req.params.id;
    try{
        const course=await Course.findOneAndUpdate({_id}, req.body);
        
        if(course){
             // add to teachers
            if(req.body.teachers){
            req.body.teachers.forEach(async teacherID => {
                const teacher = await User.findById(teacherID);
                teacher.courses.push({courseID: course._id});
                teacher.save();
            })}
    
    
            //add to students
            if(req.body.students){
            req.body.students.forEach(async studentID => {
                const student = await User.findById(studentID);
                student.courses.push({courseID: course._id});
                student.save();
            })}
    
            res.status(200).json(course);
            console.log("course update succeed");
        }else{
            res.status(404).json({message: "Course not found"});
        }

    }catch(err){
        console.log("course update failed");
        res.status(500).json({message: err.message});
    }
}

module.exports.deleteCourse= async(req, res)=>{
    const _id = req.params.id;
    try{
        const course=await Course.findOneAndDelete({_id}, req.body);
        if(course){
            console.log("course deleted");
            res.status(200).json(course);
        }else{
            res.status(401).send({message: "course not found"});
        }
    }catch(err){
        console.log("suppression failed");
        res.status(500).json({message: err.message});
    }

}