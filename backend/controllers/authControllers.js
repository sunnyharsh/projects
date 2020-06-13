const LoginModal = require("../models/loginModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const jwt = require("jsonwebtoken");

exports.getLogin = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password)
    return next(new AppError("valid enter username/password", 400));

  const userData = await LoginModal.find({ username });
  if (userData[0].password != password) {
    return next(new AppError("password is wrong ", 400));
  }
  const token = jwt.sign({ id: userData[0]._id }, "secretkey", {
    expiresIn: 100
  });

  req.session.jwt_token = token;
  res.status(200).json({
    msg: "login success",
    token: token
  });
});

exports.getData = (req, res, next) => {
  console.log("hi");
};
