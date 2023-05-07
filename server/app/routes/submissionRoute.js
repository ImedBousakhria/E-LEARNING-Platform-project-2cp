const express = require('express');
const router = express.Router();
const submissionController = require('../controllers/submissionController');
const { requireAuth, checkUser } = require('../middleware/userMiddleware');

router.get('/submission/getAll',requireAuth, submissionController.getAllSubmissions);
router.get('/submission/get/:id',requireAuth, submissionController.getSubmissionById);
router.post('/submission/create',requireAuth, submissionController.createSubmission);
router.delete('/submission/delete/:id',requireAuth,submissionController.deleteSubmission);

module.exports = router;