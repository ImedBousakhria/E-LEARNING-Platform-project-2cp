// const Course = require('../models/Course') ;
// const User = require("../models/User");
// const multer = require('multer');
// const upload = require('../middleware/uploadMiddleware');
// const fs = require('fs');
// const path = require('path');
// const Announcement = require('../models/Announcement');
// const Discussion = require('../models/Discussion');
// const mongoose = require('mongoose');
// const Announcement = require('../models/Announcement');


// // GET all Announcements
// module.exports.getAllAnnouncements = async (req, res) => {
//     try {
//       const announcements = await Announcement.find();
//       res.json(announcements);
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   };
  
//   // GET a single Announcement by id
//   module.exports.getAnnouncementById = async (req, res) => {
//     try {
//       const announcement = await Announcement.findById(req.params.id);
//       if (!announcement) {
//         return res.status(404).json({ error: "Announcement not found" });
//       }
//       res.json(announcement);
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   };

  
// // POST create a new Announcement with files
// module.exports.createAnnouncement = [
//   async (req, res) => {
//     try {
//       // Check if the request body contains base64 encoded file data
//       if (req.body.file) {
//         // Decode the base64 data to a Buffer
//         const fileData = Buffer.from(req.body.file, 'base64');

//         // Create a temporary file to write the Buffer data
//         const tempFileName = 'temp_' + Date.now();
//         fs.writeFileSync(tempFileName, fileData);

//         // Create the file object for multer upload
//         const tempFile = {
//           originalname: 'Announcement_file',
//           mimetype: req.body.mimetype,
//           buffer: fs.readFileSync(tempFileName)
//         };

//         // Add the file object to the request files array
//         req.files = [tempFile];
//       }

//       // Extract the files from the request and add them to the gallery array
//       const gallery = req.files.map(file => ({
//         contentType: file.mimetype,
//         data: file.buffer,
//         // postedBy: req.user._id
//       }));

//       // Create the Announcement object
//       const announcement = new Announcement({
//         title: req.body.title,
//         description: req.body.description,
//         gallery: gallery,
//         course: req.body.course
//       });


//        // Add the new Announcement to the course
//        const course = await Course.findById(req.body.course);
//        course.announcement.push(announcement._id);
//        await course.save();


//       // Save the Announcement object
//       await announcement.save();

//       res.json(announcement);
//     } catch (err) {
//       res.status(400).json({ error: err.message });
//     }
//   }
// ];
  

// // PUT update a Announcement with files
// module.exports.updateAnnouncement = [
//   async (req, res) => {
//     try {

//       // Check if the request body contains base64 encoded file data
//       if (req.body.file) {
//         // Decode the base64 data to a Buffer
//         const fileData = Buffer.from(req.body.file, 'base64');

//         // Create a temporary file to write the Buffer data
//         const tempFileName = 'temp_' + Date.now();
//         fs.writeFileSync(tempFileName, fileData);

//         // Create the file object for multer upload
//         const tempFile = {
//           originalname: 'Announcement_file',
//           mimetype: req.body.mimetype,
//           buffer: fs.readFileSync(tempFileName)
//         };

//         // Add the file object to the request files array
//         req.files = [tempFile];

        
//       }
//       const announcement = await Announcement.findById(req.params.id);
//       // Extract the files from the request and add them to the gallery array
//       if (req.body.file) {
//         const gallery = req.files.map(file => ({
//           contentType: file.mimetype,
//           data: file.buffer,
//           postedBy: req.user._id
//         }));

//         announcement.gallery = gallery;
//       }


//       // Update the Announcement object

//       if(req.body.title){
//         announcement.title = req.body.title;
//       }
//       if(req.body.description){
//         announcement.description = req.body.description;
//       }
      
    
//       await announcement.save();

//       res.json(announcement);
//     } catch (err) {
//       res.status(400).json({ error: err.message });
//     }
//   }
// ];


//   // DELETE a Announcement by id
 
  
//   module.exports.deleteAnnouncement = async (req, res) => {
//     try {

//       const _id = req.params.id;
  
//       // Delete the Announcement and associated discussion forum
    
//       const deletedAnnouncement = await Announcement.findByIdAndDelete(_id);
    
//        // Remove the Announcement ID from the associated course
//     const course = await Course.findOneAndUpdate(
//       { announcements: _id }, // Find the course that has the Announcement ID in its Announcements array
//       { $pull: { Announcements: _id } }, // Remove the Announcement ID from the Announcements array field
//       { new: true }
//     );
      
//       if (!deletedAnnouncement) {
//         return res.status(404).json({ message: 'Announcement not found' });
//       }
  
//       res.status(200).json({ message: 'Announcement deleted successfully' });
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };
  