const mongoose = require("mongoose");
const slugify = require("slugify");

const loginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "usrname can't be balnk"],
    unique: true,
    trim: true,
    maxlength: [40, "maximum length of name is 40"],
    minlength: [2, "minimum length of name is 10"]
  },
  password: {
    type: String,
    required: [true, "password can't be balnk"],
    trim: true,
    maxlength: [40, "maximum length of password is 40"],
    minlength: [2, "minimum length of password is 10"]
  }
});

const Login = mongoose.model("Login", loginSchema);

module.exports = Login;
