const express = require("express");
const authControllers = require("../controllers/authControllers");
const tokenVerify = require("../utils/tokenverification");
const router = express.Router();

router
  .route("/listUser")
  .post(tokenVerify.verifyToken, authControllers.getData);

module.exports = router;
