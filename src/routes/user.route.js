const {addUserController,showForm} = require('../controllers/user.controller');
const {getUserController} = require('../controllers/user.controller');
const router = require('express').Router();
router.get('/',showForm);
router.post('/home',addUserController);
router.get('/allUsers',getUserController);
module.exports = router;