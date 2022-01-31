const UserServices =  require('../services/user.services');

exports.addUsers = async (request, response) => {
    const newUser = UserServices.createUser(request.body.email, request.body.password);
    try {
      response.send("success");
    } catch (error) {
      response.status(500).send(error);
    }
}

exports.getUsers = async (request, response) => {
    const user = UserServices.getUser();
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  }