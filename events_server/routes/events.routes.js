const express = require('express');
const router = express.Router();
const EventController = require('../controllers/event.controller');
const { body } = require('express-validator');

router.post('/add_event', 
// body('eventName').isString().isLength({ min: 3 }), 
// body('startDate').isDate(),
// body('endDate').isDate(),
// body('description').isLength({ min: 5 }),
// body('eventType').equals("Online" || "Offline"),
EventController.addEvents);

router.get('/events', EventController.getEvents);

module.exports = router;