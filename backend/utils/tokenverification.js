const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");
const { promisify } = require("util");

exports.verifyToken = catchAsync(async (req, res, next) => {
  if (!req.session.jwt_token) {
    return res.status(403).json({
      msg: "token not verified"
    });
  }
  const token = await promisify(jwt.verify)(req.session.jwt_token, "secretkey");
  next();
});
// module.exports = verifyToken;
