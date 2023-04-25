const { Router } = require('express');
const userController = require('../controllers/userController');
const { requireAuth } = require('../middleware/userMiddleware');
const { requireAdmin } = require('../middleware/adminMiddleware');

const router = Router();


router.get('/user/login', userController.login_get);
router.post('/user/login', userController.login_post);
router.get('/user/logout', userController.logout_get);

// router.get('/user/get/:id', requireAuth, userController.getUser); //requireAuth
router.get('/user/get/:id', userController.getUser);
// router.put('/user/updateProfile/:id', requireAuth, userController.updateProfile);
router.put('/user/updateProfile/:id', userController.updateProfile);

router.get('/user/testUser', requireAuth, requireAdmin ,(req, res) => {
    res.json({message: 'test done'});
});

module.exports = router;