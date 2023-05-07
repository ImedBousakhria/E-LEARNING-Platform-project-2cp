const { Router } = require('express');
const adminController = require('../controllers/adminController');
const { requireAuth, checkUser } = require('../middleware/userMiddleware');
const {requireAdmin} = require('../middleware/adminMiddleware');

const router = Router();



router.get('/user/getAll', adminController.getAllUsers);
router.get('/user/getStudents', adminController.getAllStudents);
router.get('/user/getTeachers', adminController.getAllTeachers);
router.post('/user/createStudent',  adminController.insertStudent);
router.post('/user/createStudent', adminController.insertStudent);
router.post('/user/createTeacher', adminController.insertTeacher);
router.post('/user/createAdmin', adminController.insertAdmin);
router.post('/user/createUser', adminController.insertUser);
router.put('/user/update-user/:id', adminController.updateUser); //email || password for users
router.delete('/user/delete/:id', adminController.deleteUser);
router.put('/user/promoteAdmin/:id', adminController.promoteAdminUser);
router.put('/user/demoteAdmin/:id',adminController.demoteAdminUser);

module.exports = router;