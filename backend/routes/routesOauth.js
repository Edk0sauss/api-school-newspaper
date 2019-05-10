const express = require("express");
const oauthController = require("../utils/oauth");

const router = express.Router();
router.route("/login").get(oauthController.login);
router.route("/callback").get(oauthController.oauthCallback);

module.exports = router;