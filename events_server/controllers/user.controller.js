const UserServices =  require('../services/user.services');

exports.addUsers = async (request, response) => {
    try {
      const newUser = await UserServices.createUser(request.body.email, request.body.password);
      response.send(newUser.email);
      throw new Error('Sorry, something went wrong');
    } catch (error) {
      response.status(500).send(error);
    }
}

exports.getUsers = async (request, response) => {
    try {
      const user = UserServices.getUser();
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  }