const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

/* GET users listing. */
router.post("/login", userController.login);
router.post("/signup", userController.register);
router.all("*", (req, res) => {
  res.status(400).json({
    err: "Invalid route",
  });
});
module.exports = router;
