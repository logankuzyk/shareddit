const express = require("express");
const router = express.Router();
const fs = require("fs");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("site/index", {
    title: "shareddit: share reddit posts with images",
    info: fs.readFileSync(__dirname + "/../views/site/info.hbs"),
  });
});

module.exports = router;
