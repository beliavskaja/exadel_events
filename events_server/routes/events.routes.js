const express = require('express');
const router = express.Router();
const EventController = require('../controllers/event.controller');

router.post('/add_event', EventController.addEvents);
router.get('/events', EventController.getEvents);

module.exports = router;