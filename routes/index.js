const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("site/index", {
    title: "shareddit: share reddit posts with images",
  });
});

module.exports = router;
