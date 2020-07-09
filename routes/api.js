const express = require("express");
const router = express.Router();
const backend = require("../api/main");
const handlebars = require("handlebars");

router.get(
  "/:sub/comments/:postID/:title/:commentID?",
  async (req, res, next) => {
    let data = await backend.generate(req.params);
    res.render("site/generated", {
      title: data.title,
      // Render the page, right now it just displays the Imgur image. Probably want to pass the frontend off to a different route.
      link: data.url,
    });
  }
);

module.exports = router;
