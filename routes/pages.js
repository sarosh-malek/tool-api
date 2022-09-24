const express = require("express");
const router = express.Router();
const pageController = require("../controller/pageController");

/* GET users listing. */
router.get("/get-pages", pageController.getPages);
router.post("/add-page", pageController.addPage);
router.all("*", (res, req) => {
  res.status(401).json({
    error: "invalid route",
  });
});
module.exports = router;
