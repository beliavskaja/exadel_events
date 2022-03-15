const eventModel = require("../models/event.model");

exports.createEvent = async (
  eventName,
  startDate,
  endDate,
  description,
  type
) => {
  const event = new eventModel({
    eventName,
    startDate,
    endDate,
    description,
    type,
  });
  return await event.save();
};

exports.getEvents = async (skip, limit) => {
  return await eventModel.find({}).skip(skip).limit(limit);
};
