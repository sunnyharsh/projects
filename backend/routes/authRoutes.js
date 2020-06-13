const express = require("express");
const authControllers = require("../controllers/authControllers");
const router = express.Router();

router.route("/login").get(authControllers.getLogin);

module.exports = router;
