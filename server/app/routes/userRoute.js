const { Router } = require('express');
const userController = require('../controllers/userController');
const { requireAuth } = require('../middleware/userMiddleware');
const { requireAdmin } = require('../middleware/userMiddleware');
const { requireGerant } = require('../middleware/adminMiddleware');

const router = Router();


router.get('/user/login', userController.login_get);
router.post('/user/login', userController.login_post);

router.get('/user/get/:id', requireAuth, userController.getUser); //requireAuth
router.put('/user/updateProfile/:id', requireAuth, userController.updateProfile);

router.get('/user/testUser', requireAuth, requireAdmin ,(req, res) => {
    res.json({message: 'test done'});
});

module.exports = router;