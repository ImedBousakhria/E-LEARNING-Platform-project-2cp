const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');

router.get('/assignments', assignmentController.getAllAssignments);
router.get('/assignments/:id', assignmentController.getAssignment);
router.post('/assignments/create', assignmentController.createAssignment);
router.put('/assignments/update/:id',assignmentController.updateAssignment);
router.delete('/assignments/delete/:id',assignmentController.deleteAssignment);

module.exports = router;