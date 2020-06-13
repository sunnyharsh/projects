const db1 = require("../dbConnections/db1");
const Schema = db1.Schema;
const loginSchema = new Schema({
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

const Login = db1.model("Logins", loginSchema);

module.exports = Login;
