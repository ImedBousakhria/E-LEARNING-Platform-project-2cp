const discussion = require('../models/Discussion');
const Lesson = require('./models/Lesson');

  exports.getMessages = async (req, res, next) => {
    try {
      const { lessonId } = req.params;
      const discussion = await Discussion.findOne({ lesson: lessonId }).populate('messages.user', 'name');
      res.status(200).json(discussion);
    } catch (error) {
        res.status(500).json({message: err.message});
    }
  };
  
  exports.postMessage = async (req, res, next) => {
    try {
      const { lessonId } = req.params;
      const { text, userId } = req.body;
      const discussion = await Discussion.findOneAndUpdate(
        { lessonId },
        { $push: { messages: { text, userId } } },
        { new: true, upsert: true }
      );
      res.status(200).json(discussion);
    } catch (error) {
    res.status(500).json({message: err.message});

    }
  };
