const Assignment = require('../models/assignment');

// Get all assignments
exports.getAllAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.status(200).json(assignments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one assignment
exports.getAssignment = async (req, res, next) => {
    try {
      const assignment = await Assignment.findById(req.params.id);
      if (assignment == null) {
        return res.status(404).json({ message: 'Assignment not found' });
      }
      res.status(200).json(assignment);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

// Create an assignment
exports.createAssignment = async (req, res) => {
  const assignment =  new Assignment({
    title: req.body.title,
    description: req.body.description,
    dueDate: req.body.dueDate
  });

  try {
    const newAssignment = await assignment.save();
    res.status(201).json(newAssignment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an assignment
exports.updateAssignment = async (req, res) => {
    try {
      const updatedAssignment = await Assignment.findOneAndUpdate({ _id: req.params.id },
        {
          title: req.body.title,
          description: req.body.description,
          dueDate: req.body.dueDate
        },{ new: true }
      );
      if (updatedAssignment == null) {
        return res.status(404).json({ message: 'Assignment not found' });
      }
      res.json({ message: 'Assignment updated successfully', assignment: updatedAssignment });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

// Delete an assignment
exports.deleteAssignment = async (req, res) => {
  try {
    await Assignment.findOneAndDelete({ _id: req.params.id });
    res.json({ message: 'Assignment deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};