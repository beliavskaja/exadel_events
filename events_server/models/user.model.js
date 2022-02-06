const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
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
    type: String 
  },
});

const User = mongoose.model("Users", UserSchema);

module.exports = User;