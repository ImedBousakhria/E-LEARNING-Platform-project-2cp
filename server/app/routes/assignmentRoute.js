const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');

router.get('/assignment/getAll', assignmentController.getAllAssignments);
router.get('/assignment/get/:id', assignmentController.getAssignmentById);
router.post('/assignment/create', assignmentController.createAssignment);
router.put('/assignment/update/:id',assignmentController.updateAssignment);
router.delete('/assignment/delete/:id',assignmentController.deleteAssignment);

module.exports = router;