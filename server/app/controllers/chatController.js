
const Discussion = require('../models/Discussion');

// POST create a new discussion
module.exports.createDiscussion = async (req, res) => {
    try {
      const lessonId = req.body.lesson;
      const discussion = new Discussion({
        lesson: lessonId,
        messages: [],
      });
      await discussion.save();
  
      res.status(201).json({ message: 'Discussion created successfully', discussion });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // GET a discussion by ID
  module.exports.getDiscussionById = async (req, res) => {
    try {
    //   const discussion = await Discussion.findById(req.params.id).populate('messages');
      const discussion = await Discussion.findOne({ lesson: req.params.id }).populate('messages.user', 'name');
      if (!discussion) {
        return res.status(404).json({ message: 'Discussion not found' });
      }
      res.status(200).json(discussion);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  
// Create a new message in the discussion
module.exports.createMessage = async (req, res) => {
    try {
      // Find the discussion associated with the lesson
      const discussion = await Discussion.findOne({ lesson: req.params.id });
  
      if (!discussion) {
        return res.status(404).json({ error: 'Discussion not found' });
      }
  
      // Create a new message and add it to the discussion
      const message = {
        content: req.body.content,
        user: req.body.user,
        createdAt: Date.now(),
      };
      discussion.messages.push(message);
  
      // Save the updated discussion object
      await discussion.save();
  
      res.json(discussion);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  // Get all messages in the discussion
  module.exports.getMessages = async (req, res) => {
    try {
      // Find the discussion associated with the lesson
      const discussion = await Discussion.findOne({ lesson: req.params.id }).populate('messages.user', 'name');
      if (!discussion) {
        return res.status(404).json({ error: 'Discussion not found' });
      }
      res.json(discussion.messages);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };