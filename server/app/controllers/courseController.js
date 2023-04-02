const Course = require('../models/Course') ;
const User = require("../models/User");

module.exports.get = async (req, res) =>{
    const _id = req.params.id;
    try{
        const course = await Course.findById({_id})
        .populate('teachers', 'firstName lastName')
        .populate('students', 'firstName lastName')

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

module.exports.post = async (req, res) =>{
   

    try{
        //create the course document
        const activity = await Activity.create(req.body);
 
        
        //add to main teacher (if there is only one)

        // const teacher = await User.findById(req.body.teacher);
        // mainManager.course.push({courseID: course._id});
        // // mainManager.course.push({courseID: course._id, role: "main-manager"});
        // mainManager.save();

        
        // add to teachers
        req.body.teachers.forEach(async teacherID => {
            const teacher = await User.findById(teacherID);
            teacher.courses.push({courseID: course._id});
            // teacher.courses.push({courseID: course._id, role: "teacher"});
            teacher.save();
        })


        //add to students
        req.body.students.forEach(async studentID => {
            const student = await User.findById(studentID);
            student.courses.push({courseID: course._id});
            // student.courses.push({courseID: course._id, role: "student"});
            student.save();
        })

        //add to lessons
        req.body.lessons.forEach(async lessonID => {
            const lesson = await User.findById(lessonID);
            lesson.course.push({lessonID: lesson._id});
            lesson.save();

        })

        //add to assignments
        req.body.assignments.forEach(async assignmentID => {
            const assigment = await User.findById(assigmentID);
            assigment.course.push({assigmentID: assigment._id});
            assigment.save();

        })

        //add to annoucements
        req.body.annoucements.forEach(async annoucementID => {
            const annoucement = await User.findById(annoucementID);
            annoucement.course.push({annoucementID: annoucement._id});
            annoucement.save();

        })

        res.status(200).json(course);
    }catch(err){
        console.log("creation failed ");
        res.status(500).json({message: err.message});
    }

}

module.exports.put = async (req, res) =>{
    const _id = req.params.id;
    try{
        const course=await Course.findOneAndUpdate({_id}, req.body);
        
        if(course){
                
            res.status(200).json(course);
        }else{
            res.status(404).json({message: "Activity not found"});
        }

    }catch(err){
        console.log("course update succeed");
        res.status(500).json({message: err.message});
    }
}

module.exports.delete = async (req, res) =>{
    try{
        const course=await Course.findOneAndDelete({_id}, req.body);
        if(course){
            res.status(200).json(course);
        }else{
            res.status(401).send({message: "course not found"});
        }
    }catch(err){
        console.log("suppression failed");
        res.status(500).json({message: err.message});
    }

}