const discussion = require('../models/Discussion');
  exports.getMessages = async (req, res, next) => {
    try {
      const { lesson } = req.params;
      const discussions = await Discussion.find({ lesson });
      res.status(200).json(discussion);
    } catch (error) {
        res.status(500).json({message: err.message});
    }
  };
  
  exports.postMessage = async (req, res, next) => {
  try {
    const { lesson } = req.params;
    const { text } = req.body;
    const userId = req.user._id; // Assuming that you have implemented authentication and have access to the current user's ID

    const discussion = await Discussion.findOneAndUpdate(
      { lesson },
      { $push: { messages: { text, userId } } },
      { new: true, upsert: true }
    ).populate('messages.userId', 'name'); // Populate the userId field with the user's name

    res.status(200).json(discussion);
  } catch (error) {
    res.status(500).json({message: err.message});
  }
};
