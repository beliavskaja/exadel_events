const jwt = require("jsonwebtoken");
// const{ eventsMocks } = require("../mocks/eventsMocks");

const eventsMocks = [
    {
        name: "Event1",
        description: "new event",
        startDate: "12.04.2022",
        endDate: "13.04.2022",
        type: "offline", 
        address: "Berlin",
    },
    {
        name: "Event1",
        description: "new event",
        startDate: "12.05.2022",
        endDate: "13.05.2022",
        type: "online",
    },
    {
        name: "Event1",
        description: "new event",
        startDate: "16.04.2022",
        endDate: "17.04.2022",
        type: "offline", 
        address: "Vilnius",
    }
];

exports.getEvents = async (request, response) => {
    try {
      response.send(eventsMocks);
    } catch (error) {
      response.status(500).send(error);
    }
};