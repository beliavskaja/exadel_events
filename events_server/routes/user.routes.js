const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
// const EventController = require('../controllers/event.controller');
const {checkToken} = require("../middleware/authorizationMiddleware");

router.post('/add_user', UserController.addUsers);
router.post('/login', UserController.loginUser);
router.get('/users', checkToken, UserController.getUsers);
router.get('/check_auth', checkToken, function(request, response){
    response.send({result: "OK"});
});

// router.get('/events', EventController.getEvents);

module.exports = router;