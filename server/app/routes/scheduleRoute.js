const { Router } = require('express');
const scheduleController = require('../controllers/scheduleController');
const { requireAuth, checkUser } = require('../middleware/userMiddleware');

const router = Router();

router.get('/schedules/getAll',requireAuth, scheduleController.getAllSchedules);
router.get('/schedules/get/:id',requireAuth, scheduleController.getScheduleById);
router.get('/schedules/getAllForCourse/:id',requireAuth, scheduleController.getAllSchedulesForCourse);
router.post('/schedules/create', requireAuth,scheduleController.createSchedule);
router.put('/schedules/update/:id',requireAuth, scheduleController.updateSchedule);
router.delete('/schedules/delete/:id',requireAuth, scheduleController.deleteSchedule);
router.delete('/schedules/deleteAll',requireAuth, scheduleController.deleteAllSchedulesForCourse);
router.delete('/schedules/deleteAll',requireAuth, scheduleController.deleteAllSchedules)


module.exports = router;