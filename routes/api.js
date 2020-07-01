const express = require("express");
const router = express.Router();
const backend = require("../api/main");

router.get(
  "/:sub/comments/:postID/:title/:commentID?",
  async (req, res, next) => {
    let data = await backend.generate(req.params);
    res.render("layout", {
      title: data.title,
      // Render the page, right now it just displays the Imgur image. Probably want to pass the frontend off to a different route.
      body: "<img src=" + '"' + data.url + '">',
    });
  }
);

module.exports = router;
