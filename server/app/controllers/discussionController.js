const Discussion = require('../models/Discussion');
const Lesson = require('../models/Lesson');

exports.createDiscussion = async (req, res) => {
  const newDiscussion = new Discussion({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    const savedDiscussion = await newDiscussion.save();
    res.status(200).json(savedDiscussion);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getDiscussion = async (req, res, next) => {
  try {
    const discussion = await Discussion.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(discussion);
  } catch (err) {
    res.status(500).json(err);
  }
};
