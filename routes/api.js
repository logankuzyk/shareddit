var express = require("express");
var hbs = require("express-handlebars");
var router = express.Router();
var backend = require("../api/main");
var fs = require("fs");
var handlebars = require("handlebars");

router.get(
  "/:sub/comments/:postID/:title/:commentID?",
  async (req, res, next) => {
    let data = await backend.generate(req.params);
    let source = fs.readFileSync(__dirname + "/../views/image.hbs", "utf8");
    const template = handlebars.compile(source);
    let renderedComments = "";
    for (const [i, comment] of data.comments.entries()) {
      let params = {
        author: comment.author,
        commentHTML: comment.bodyMD,
        score: comment.score,
        time: comment.time,
        child: renderedComments,
      };
      if (i === data.comments.length - 1) {
        params.link = data.link;
      }
      renderedComments = template(params);
    }
    res.render("layout", { title: data.title, body: renderedComments });
  }
);

module.exports = router;
