const express = require('express');
const router = express.Router();
const EventController = require('../controllers/event.controller');
const { body } = require('express-validator');

router.post('/add_event', 
body('eventName').isString().isLength({ min: 3 }), 
body('startDate').isISO8601(),
body('endDate').isISO8601(),
body('description').isLength({ min: 5 }),
body('eventType').isIn(['Online', 'Offline']),
body('location').isString(),
EventController.addEvents);

router.get('/events', EventController.getEvents);

module.exports = router;