const { Router } = require('express');
const scheduleController = require('../controllers/scheduleController');

const router = Router();

router.get('/schedules/getAll', scheduleController.getAllSchedules);
router.get('/schedules/get/:id', scheduleController.getScheduleById);
router.get('/schedules/getAllForCourse/:id', scheduleController.getAllSchedulesForCourse);
router.post('/schedules/create', scheduleController.createSchedule);
router.put('/schedules/update/:id', scheduleController.updateSchedule);
router.delete('/schedules/delete/:id', scheduleController.deleteSchedule);
router.delete('/schedules/deleteAll', scheduleController.deleteAllSchedulesForCourse);


module.exports = router;