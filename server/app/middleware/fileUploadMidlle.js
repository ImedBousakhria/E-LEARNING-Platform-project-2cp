// const express = require('express');
// const fileUpload = require('express-fileupload');
// const app = express();

// // Middleware for parsing multipart/form-data
// app.use(fileUpload());

// // Route for handling file upload
// app.post('/upload', (req, res) => {
//   if (!req.files || Object.keys(req.files).length === 0) {
//     return res.status(400).send('No files were uploaded.');
//   }

//   // The name of the input field (i.e. "file") is used to retrieve the uploaded file
//   const file = req.files.file;

//   // Use the mv() method to place the file somewhere on your server
//   file.mv('/path/to/destination/filename.ext', (err) => {
//     if (err) return res.status(500).send(err);

//     res.send('File uploaded!');
//   });
// });

