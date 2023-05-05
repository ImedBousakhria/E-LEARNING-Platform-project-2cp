const multer = require('multer');

// Define storage for the files
const storage = multer.memoryStorage();

// Filter for allowed file types
const fileFilter = function(req, file, callback) {
  if (file.mimetype.startsWith('image/') || file.mimetype === 'application/pdf' || file.mimetype.startsWith('video/')) {
    callback(null, true);
  } else {
    callback(new Error('Only images, PDFs, and videos are allowed'));
  }
};

// Initialize multer middleware
const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 10 * 100000 // 1000 MB file size limit
  }
});

module.exports = upload;
