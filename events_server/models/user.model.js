const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: [{
    type: String,
    required: true,
  }],
  token: { 
    type: String ,
    required: true,
  },
});

const User = mongoose.model("Users", UserSchema);

module.exports = User;
