const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');
const { requireAuth, checkUser } = require('../middleware/userMiddleware');

router.get('/assignment/getAll',requireAuth, assignmentController.getAllAssignments);
router.get('/assignment/get/:id',requireAuth, assignmentController.getAssignmentById);
router.post('/assignment/create',requireAuth, assignmentController.createAssignment);
router.put('/assignment/update/:id',requireAuth,assignmentController.updateAssignment);
router.delete('/assignment/delete/:id',requireAuth, assignmentController.deleteAssignment);

module.exports = router;