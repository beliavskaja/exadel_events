const express = require('express');
const router = express.Router();
const EventController = require('../controllers/event.controller');
// const {checkToken} = require("../middleware/authorizationMiddleware");

router.post('/add_event', EventController.addEvents);
router.get('/events', EventController.getEvents);

module.exports = router;