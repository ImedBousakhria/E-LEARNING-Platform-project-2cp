const discussion = require('../models/Discussion');
const Lesson = require('../models/Lesson');

  exports.getMessages = async (req, res, next) => {
  try {
    const { lessonId } = req.params;
    const discussion = await Discussion.findOne({ lesson: lessonId }).populate('messages.user', 'name');
    const io = req.app.get('io');
    io.emit(`discussion-${lessonId}`, discussion);
    res.status(200).json(discussion);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};
  
  exports.postMessage = async (req, res, next) => {
  try {
    const { lessonId } = req.params;
    const { text, userId } = req.body;
    const discussion = await Discussion.findOneAndUpdate(
      { lesson: lessonId },
      { $push: { messages: { text, userId } } },
      { new: true, upsert: true }
    ).populate('messages.user', 'name');
    const io = req.app.get('io');
    io.emit(`discussion-${lessonId}`, discussion); 
    res.status(200).json(discussion);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};
