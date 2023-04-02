const Announcement = require('../models/announcement');
const multer = require('multer');
const upload = require('../middleware/uploadMiddleware');


// POST create announcement with comments and files
module.exports.createAnnouncement = [
  upload.array('gallery'), // handle file uploads
  async (req, res) => {
    try {
      // Extract the files from the request and add them to the gallery array
      const gallery = req.files.map(file => ({
        contentType: file.mimetype,
        data: file.buffer,
        postedBy: req.user._id
      }));

      // Create new announcement with gallery
      const newAnnouncement = new Announcement({
        title: req.body.title,
        description: req.body.description,
        gallery: gallery
      });

      // Create new comments and add them to the announcement
      const commentData = req.body.comments;
      const comments = await Promise.all(commentData.map(async comment => {
        const newComment = new Comment({
          content: comment.content,
          postedBy: req.user._id,
          announcement: newAnnouncement._id
        });
        return await newComment.save();
      }));

      newAnnouncement.comments = comments.map(comment => comment._id);

      await newAnnouncement.save();

      res.json(newAnnouncement);
    } catch (err) {
      res.status(400).json(err);
    }
  }
];


// GET list of all announcements
module.exports.getAnnouncements = (req, res) => {
  Announcement.find()
    .then(announcements => res.json(announcements))
    .catch(err => res.status(400).json(err));
};

// GET a specific announcement by ID
module.exports.getAnnouncementById = (req, res) => {
  Announcement.findById(req.params.id)
    .then(announcement => res.json(announcement))
    .catch(err => res.status(400).json(err));
};

// PUT update an existing announcement by ID
module.exports.updateAnnouncement = [
  upload.array('gallery'), // handle file uploads
  (req, res) => {
    // Extract the files from the request and add them to the gallery array
    const gallery = req.files.map(file => ({
      contentType: file.mimetype,
      data: file.buffer,
      postedBy: req.user._id
    }));

    // Update announcement with new gallery
    Announcement.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      description: req.body.description,
      gallery: gallery
    }, { new: true })
      .then(announcement => res.json(announcement))
      .catch(err => res.status(400).json(err));
  }
];

// DELETE an existing announcement by ID
module.exports.deleteAnnouncement = (req, res) => {
  Announcement.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'Announcement deleted successfully' }))
    .catch(err => res.status(400).json(err));
};




