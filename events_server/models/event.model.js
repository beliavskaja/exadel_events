const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    unique: true,
    required: true,
  },
  startDate: {
    type: Object,
    required: true,
  },
  endDate: {
    type: Object,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  eventType: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model("Events", EventSchema);

module.exports = Event;