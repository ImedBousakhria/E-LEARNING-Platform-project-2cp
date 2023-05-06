const Course = require('../models/Course') ;
const fs = require('fs');
const Submission = require('../models/Submission');




// GET all Submissions
module.exports.getAllSubmissions = async (req, res) => {
    try {
      const submissions = await Submission.find();
      res.json(submissions);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // GET a single Submission by id
  module.exports.getSubmissionById = async (req, res) => {
    try {
      const submission = await Submission.findById(req.params.id);
      if (!submission) {
        return res.status(404).json({ error: "Submission not found" });
      }
      res.json(submission);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


// POST create a new Submission with files
module.exports.createSubmission = [
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
          originalname: 'Submission_file',
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

      // Create the Submission object
      const submission = new Submission({
        description: req.body.description,
        gallery: gallery,
        submittedBy: req.body.submittedBy,
        assignment: req.body.assignment || null // Set assignment to null if not provided
      });

      // Add the new Submission to the course if course is provided
      if (req.body.assignment) {
        const assignment = await Course.findById(req.body.assignment);
        if (assignment) {
          assignment.submissions.push(submission._id);
          await assignment.save();
          
        }
      }

      // Save the Submission object
      await submission.save();

      res.json(submission);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
];

  

// // PUT update a Submission with files
// module.exports.updateSubmission = [
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
//           originalname: 'Submission_file',
//           mimetype: req.body.mimetype,
//           buffer: fs.readFileSync(tempFileName)
//         };

//         // Add the file object to the request files array
//         req.files = [tempFile];

        
//       }
//       const submission = await Submission.findById(req.params.id);
//       // Extract the files from the request and add them to the gallery array
//       if (req.body.file) {
//         const gallery = req.files.map(file => ({
//           contentType: file.mimetype,
//           data: file.buffer,
//           postedBy: req.user._id
//         }));

//         submission.gallery = gallery;
//       }


//       // Update the Submission object

//       if(req.body.description){
//         submission.description = req.body.description;
//       }
//       if(req.body.deadline){
//         submission.deadline = req.body.deadline;
//       }
      
    
//       await submission.save();

//       res.json(submission);
//     } catch (err) {
//       res.status(400).json({ error: err.message });
//     }
//   }
// ];


  // DELETE a Submission by id
 
  
  module.exports.deleteSubmission = async (req, res) => {
    try {

      const _id = req.params.id;
  
      // Delete the Submission and associated discussion forum
    
      const deletedSubmission = await Submission.findByIdAndDelete(_id);
    
       // Remove the Submission ID from the associated course
    const course = await Course.findOneAndUpdate(
      { submissions: _id }, // Find the course that has the Submission ID in its Submissions array
      { $pull: { submissions: _id } }, // Remove the Submission ID from the Submissions array field
      { new: true }
    );
      
      if (!deletedSubmission) {
        return res.status(404).json({ message: 'Submission not found' });
      }
  
      res.status(200).json({ message: 'Submission deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  