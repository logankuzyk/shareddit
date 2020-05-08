const express = require("express");
const router = express.Router();
const backend = require("../api/main");

router.get(
  "/:sub/comments/:postID/:title/:commentID?",
  async (req, res, next) => {
    let data = await backend.generate(req.params);
    res.render("layout", {
      title: data.title,
      body: "<img src=" + '"' + data.url + '">',
    });
  }
);

module.exports = router;
