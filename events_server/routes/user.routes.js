const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.controller')

router.post('/add_user', UserController.addUsers)
router.get('/users', UserController.getUsers)

module.exports = router;