const userModel = require("../models/user.model");
const passwordHash = require('password-hash');

exports.createUser = async(email, password) => {
    const user = new userModel({
        email, password: passwordHash.generate(password)
    })
    await user.save()
};

exports.getUser = async() => {
    await userModel.find({});
};