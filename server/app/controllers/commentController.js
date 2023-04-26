const mongoose=require('mongoose');
// const { Validator } = require('node-input-validator');
const Announcement = require('../models/Announcement');
const Comment = require('../models/Comment');


// Get comments for an announcement
exports.getComments = async (req, res) => {
    try {
      const announcementId = req.params.id;
      // Fetch comments from the database based on the announcementId
      const comments = await Comment.find({ announcement: announcementId });
      res.status(200).json({ comments });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

// POST create a comment for an announcement
module.exports.createComment = async (req, res) => {
  try {
    // announcement = req.params.announcementId;
    const { content } = req.body;

    // Find the announcement by ID
    const announcement = await Announcement.findById(req.params.announcementId);

    if (!announcement) {
      return res.status(404).json({ error: 'Announcement not found' });
    }

    // Create a new comment
    const comment = new Comment({
      content,
      user: req.user._id // Assuming that the user is authenticated and their ID is available in req.user._id
    });

    // Add the comment to the announcement's comments array
    announcement.comments.push(comment);

    // Save the updated announcement and the new comment
    await announcement.save();
    await comment.save();

    res.json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT update a comment for an announcement
module.exports.updateComment = async (req, res) => {
  try {
    const { commentId, content } = req.body;

    // Find the comment by ID
    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    // Update the comment content
    comment.content = content;

    // Save the updated comment
    await comment.save();

    res.json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE a comment for an announcement
module.exports.deleteComment = async (req, res) => {
  try {
    const { commentId, announcementId } = req.params;

    // Find the announcement by ID
    const announcement = await Announcement.findById(announcementId);

    if (!announcement) {
      return res.status(404).json({ error: 'Announcement not found' });
    }

    // Find the comment by ID
    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    // Remove the comment from the announcement's comments array
    announcement.comments = announcement.comments.filter(c => c.toString() !== commentId);

    // Delete the comment
    await comment.remove();

    // Save the updated announcement
    await announcement.save();

    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

