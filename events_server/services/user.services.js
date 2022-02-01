const userModel = require("../models/user.model");
const passwordHash = require('password-hash');

exports.createUser = async(email, password) => {
    const user = new userModel({
        email, 
        password: passwordHash.generate(password), 
        roles: ['ROLE_SUBSCRIBER']
    });
    return await user.save();
};

exports.getUser = async() => {
    await userModel.find({});
};