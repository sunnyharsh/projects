const Tour = require("../models/loginModel");
const ApiFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getLogin = catchAsync(async (req, res) => {
  console.log("call login");
});
