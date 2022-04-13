const EventServices = require("../services/event.services");
const { validationResult } = require('express-validator');

exports.addEvents = async (request, response) => {
  try {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    const newEvent = await EventServices.createEvent(
      request.body.eventName,
      request.body.startDate,
      request.body.endDate,
      request.body.description,
      request.body.eventType,
      request.body.location
    );
    response.send(newEvent);
  } catch (error) {
    console.log(error);
    response.status(500).send(error);
  }
};

exports.getEvents = async (request, response) => {
  try {
    const limit = parseInt(request.query.limit);
    const skip = parseInt(request.query.skip);
    const events = await EventServices.getEvents(skip, limit);
    const total = await EventServices.countEvents();
    response.send({events, total});
  } catch (error) {
    response.status(500).send(error);
  }
};
