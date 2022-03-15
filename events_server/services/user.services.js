const userModel = require("../models/user.model");
const passwordHash = require('password-hash');

exports.createUser = async(email, password) => {
    const user = new userModel({
        email, 
        password: passwordHash.generate(password), 
        roles: ['ROLE_SUBSCRIBER']
    });
    return await user.save();
    // throw new Error('Sorry, something went wrong');
};

exports.getUsers = async() => {
    return await userModel.find({});
};

exports.getUserByEmail = async(email) => {
    return await userModel.findOne({email: email});
};

exports.isPasswordValid = (user, password) => {
    return passwordHash.verify(password, user.password);
};
