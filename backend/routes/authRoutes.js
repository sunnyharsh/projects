const express = require("express");
const authControllers = require("../controllers/authControllers");
const router = express.Router();

router.route("/login").post(authControllers.getLogin);

module.exports = router;
