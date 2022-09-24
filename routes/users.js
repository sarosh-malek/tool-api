const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

/* GET users listing. */
router.post("/login", userController.login);
router.post("/signup", userController.register);

module.exports = router;
