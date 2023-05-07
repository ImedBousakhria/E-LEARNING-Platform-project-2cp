const Message = require("../models/Message");

exports.getMessages = async (req, res) => {
try {
    const messages = await Message.find({
        discussionId: req.params.discussionId,
    });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.createMessage = async (req, res) => {
    const newMessage = new Message(req.body);

  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    res.status(500).json(err);
  }
    };