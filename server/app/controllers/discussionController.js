const Discussion = require('../models/Discussion');
const Lesson = require('../models/Lesson');

exports.createDiscussion = async (req, res) => {
  try {
    const { lessonId } = req.body;
    const lesson = await Lesson.findById(lessonId);
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    const newDiscussion = new Discussion({
      lesson: lesson._id,
    });
    const savedDiscussion = await newDiscussion.save();

    // Update the lesson's discussionForum field with the created discussion's id
    lesson.discussionForum = savedDiscussion._id;
    await lesson.save();

    res.status(201).json(savedDiscussion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getMessages = async (req, res, next) => {
  try {
    const { lessonId } = req.params;
    const discussion = await Discussion
      .findOne({ lesson: lessonId })
      .populate('messages.user', 'name');
    const io = req.app.get('io');
    io.emit(`discussion-${lessonId}`, discussion);
    res.status(200).json(discussion);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
    res.status(500).json({ message: error.message });
  }
};

exports.deleteDiscussion = async (req, res, next) => {
  try {
    const { lessonId } = req.params;
    const deletedDiscussion = await Discussion.findOneAndDelete({
      lesson: lessonId,
    });
    if (!deletedDiscussion) {
      return res.status(404).json({ message: 'Discussion not found' });
    }
    const io = req.app.get('io');
    io.emit(`discussion-${lessonId}`, { _id: deletedDiscussion._id }); // modify this line
    res.status(200).json(deletedDiscussion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};