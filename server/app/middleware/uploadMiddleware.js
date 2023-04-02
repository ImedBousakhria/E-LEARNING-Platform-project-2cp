const Announcement = require('../models/announcement');
const multer = require('multer');


// Define storage for the files
const storage = multer.memoryStorage({
  destination: function(req, file, callback) {
    callback(null, '');
  }
});

// Filter for allowed file types
const fileFilter = function(req, file, callback) {
  if (file.mimetype.startsWith('image/') || file.mimetype === 'application/pdf' || file.mimetype.startsWith('video/')) {
    callback(null, true);
  } else {
    callback(new Error('Only images, PDFs, and videos are allowed'));
  }
};

// Initialize multer middleware
const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
