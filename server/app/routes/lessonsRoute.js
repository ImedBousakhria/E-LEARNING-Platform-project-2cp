const { Router } = require('express');
const lessonsController = require('../controllers/lessonsController.js');
const { requireTeacherOrAdmin } = require('../middleware/adminMiddleware');
const { requireAuth } = require('../middleware/userMiddleware');
const upload = require('../middleware/uploadMiddleware');

const router = Router();


// router.get('/lesson/get/:id',requireAuth, lessonController.get);
// router.post('/lesson/create', requireAuth, requireTeacherOrAdmin, upload.array('gallery'), lessonController.post);
// router.put('/lesson/update/:id',requireAuth, requireTeacherOrAdmin, lessonController.put);
// router.delete('/lesson/delete/:id',requireAuth, requireTeacherOrAdmin, lessonController.delete);

router.get('/lesson/getAll', lessonsController.getAllLessons);
router.get('/lesson/get/:id', lessonsController.getLesson);
// router.post('/lesson/create', upload.array('gallery'), lessonsController.createLesson);
router.post('/lesson/create', lessonsController.createLesson);
// router.post('/lesson/create', upload.fields([{ name: 'gallery', maxCount: 10 }]), lessonsController.createLesson);
// router.put('/lesson/update/:id', lessonController.updateLesson);
// router.delete('/lesson/delete/:id', lessonController.deleteLesson);

router.post("/upload", upload.array('image'), (req, res) => {
    console.log(req.body, req.files);
    res.send("it worked");
  })


// router.post('/lesson/create', upload.array('files'), lessonsController.createLesson);

// router.post("/upload", upload.array('files'), (upload.array('files')req, res) => {
//     console.log(req.body, req.files);
//     res.send("it worked");
//   })

// router.put('/lesson/update/:id', lessonController.updateLesson);
// router.delete('/lesson/delete/:id', lessonController.deleteLesson);

module.exports = router;