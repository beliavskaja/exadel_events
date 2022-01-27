const express = require("express");
const userModel = require("./models");
const app = express();
const passwordHash = require('password-hash');

app.post("/add_user", async (request, response) => {
    const user = new userModel({
      ...request.body, password: passwordHash.generate(request.body.password)
    });
  
    try {
      await user.save();
      response.send("success");
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/users", async (request, response) => {
    const users = await userModel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  module.exports = app;