const { Router } = require('express');
const { requireAuth } = require('../middleware/userMiddleware');
const { requireAdmin } = require('../middleware/userMiddleware');
const { requireGerant } = require('../middleware/adminMiddleware');

const router = Router();

router.post('/user/create', requireAuth, requireAdmin ,adminController.insertUser);
router.put('/user/update-user/:id', requireAuth, requireGerant ,adminController.updateUser); //email || password for users
router.delete('/user/delete/:id', requireAuth, requireGerant ,adminController.deleteUser);

router.put('/user/promoteGerant/:id', requireAuth, requireAdmin ,adminController.promotGerantUser);
router.put('/user/DemoteGerant/:id', requireAuth, requireAdmin ,adminController.demoteGerantUser);

router.put('/user/promoteAdmin/:id', requireAuth, requireAdmin ,adminController.promoteAdminUser);
router.put('/user/demoteAdmin/:id', requireAuth, requireAdmin ,adminController.demoteAdminUser);


module.exports = router;