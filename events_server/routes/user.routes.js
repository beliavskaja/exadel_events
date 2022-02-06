const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.controller')

router.post('/add_user', UserController.addUsers);
router.post('/login', UserController.loginUser);
router.get('/users', UserController.getUsers);

module.exports = router;