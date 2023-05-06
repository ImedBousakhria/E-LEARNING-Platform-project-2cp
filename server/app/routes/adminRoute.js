const { Router } = require('express');
const adminController = require('../controllers/adminController');
const { requireAuth, checkUser } = require('../middleware/userMiddleware');
const {requireAdmin} = require('../middleware/adminMiddleware');

const router = Router();


router.get('/user/getAll',requireAuth, adminController.getAllUsers);
router.get('/user/getStudents',requireAuth, adminController.getAllStudents);
router.get('/user/getTeachers',requireAuth, adminController.getAllTeachers);
router.post('/user/createStudent', requireAuth, adminController.insertStudent);
router.post('/user/createStudent',requireAuth, adminController.insertStudent);
router.post('/user/createTeacher',requireAuth, adminController.insertTeacher);
router.post('/user/createAdmin',requireAuth, adminController.insertAdmin);
router.post('/user/createUser',requireAuth, adminController.insertUser);
router.put('/user/update-user/:id',requireAuth, adminController.updateUser); //email || password for users
router.delete('/user/delete/:id', requireAuth,adminController.deleteUser);
router.put('/user/promoteAdmin/:id', requireAuth,adminController.promoteAdminUser);
router.put('/user/demoteAdmin/:id',requireAuth,adminController.demoteAdminUser);


module.exports = router;