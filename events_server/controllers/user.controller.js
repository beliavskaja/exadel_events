const { response } = require("express");
const UserServices = require("../services/user.services");
const jwt = require("jsonwebtoken");

exports.addUsers = async (request, response) => {
  try {
    const newUser = await UserServices.createUser(
      request.body.email,
      request.body.password
    );
    response.send(newUser.email);
  } catch (error) {
    response.status(500).send(error);
  }
};

exports.getUsers = async (request, response) => {
  try {
    const users = await UserServices.getUsers();
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
};

exports.loginUser = async (request, response) => {
  try {
    const user = await UserServices.getUserByEmail(request.body.email);
    if (!user) {
      return response.status(400).send("User not found");
    }
    if (UserServices.isPasswordValid(user, request.body.password)) {
      const token = jwt.sign(
        {
          user_id: user.id,
          email: request.body.email,
          roles: [],
        },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      response.send({ user, token });
    } else {
      response.send("Not Allowed");
    }
  } catch (error) {
    response.status(500).send(error);
  }
};
