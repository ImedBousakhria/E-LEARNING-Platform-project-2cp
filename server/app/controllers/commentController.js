const mongoose=require('mongoose');
// const { Validator } = require('node-input-validator');
const Announcement = require('../models/Announcement');
const Comment = require('../models/Comment');
const User = require('../models/User');

//get all comments
module.exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get comments for an announcement
exports.getAllCommentsForAnnouncement = async (req, res) => {
    try {
      // const announcementId = req.params.announcementId;
      const announcementId = req.params.id;
      // Fetch comments from the database based on the announcementId
      const comments = await Comment.find({ announcement: announcementId });
      res.status(200).json({ comments });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

// Get a comment for an announcement
module.exports.getComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if(comment){
      res.status(200).json(comment);
      console.log("comment found");
    }else{
      res.status(404).json({ error: 'Comment not found' });
      console.log("comment not found");
    }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
    
// POST create a comment for an announcement
module.exports.createComment = async (req, res) => {
  try {
    // announcement = req.params.announcementId;
    // const { content, announcement, user } = req.body;

    // Find the announcement by ID
    const announcement = await Announcement.findById(req.body.announcement);

    if (!announcement) {
      return res.status(404).json({ error: 'Announcement not found' });
    }

    // Create a new comment
    const comment = new Comment({
      // content,
      // user: req.user.id // Assuming that the user is authenticated and their ID is available in req.user._id
    
    content: req.body.content,
    announcement: req.body.announcement,
    user: req.body.user
    });

    // Add the comment to the announcement's comments array
    announcement.comments.push(comment._id);

    // Save the updated announcement and the new comment
    await announcement.save();
    await comment.save();

    res.json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


module.exports.updateComment = async (req, res) =>{
  _id = req.params.id;
  try{
      const comment =await Comment.findOneAndUpdate({_id}, req.body, {new: true});
      if(comment){    
          res.status(200).json(comment);
          console.log("comment updated sucessfully");
      }else{
          res.status(404).json({message: "comment not found"});
          console.log("comment not found");
      }

  }catch(err){
      console.log("comment update failed");
      res.status(500).json({message: err.message});
  }
}


module.exports.deleteComment = async (req, res) => {
  try {

    const _id = req.params.id;

  
  
    const comment = await Comment.findByIdAndDelete(_id);
    
  const announcement = await Announcement.findOneAndUpdate(
    { comment: _id }, 
    { $pull: { comments: _id } }, 
    { new: true }
  );
    
    if (!comment) {
      return res.status(404).json({ message: 'comment not found' });
    }

    res.status(200).json({ message: 'comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


