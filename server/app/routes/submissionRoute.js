const express = require('express');
const router = express.Router();
const submissionController = require('../controllers/submissionController');
const { requireAuth, checkUser } = require('../middleware/userMiddleware');

router.get('/submission/getAll', submissionController.getAllSubmissions);
router.get('/submission/get/:id', submissionController.getSubmissionById);
router.post('/submission/create', submissionController.createSubmission);
router.delete('/submission/delete/:id',submissionController.deleteSubmission);

module.exports = router;