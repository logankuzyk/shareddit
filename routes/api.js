const express = require("express");
const router = express.Router();
const backend = require("../api/main");
const handlebars = require("handlebars");
const { Storage } = require("@google-cloud/storage");
const fs = require("fs");

const storage = new Storage();

getImage = async (id, params) => {
  const [files] = await storage.bucket(process.env.BUCKET_NAME).getFiles();
  console.log(id);

  for (let file of files) {
    if (file.id == id) {
      console.log("old image");
      let link = await storage
        .bucket(process.env.BUCKET_NAME)
        .file(id)
        .download();
      return { title: "", url: link };
    }
  }

  //Image has not been generated before.
  console.log("new image");
  let data = await backend.generate(params);

  let bucket = storage.bucket(process.env.BUCKET_NAME);
  let gcsname = id;
  let file = bucket.file(gcsname);
  let link = data.url;

  let stream = file.createWriteStream({
    metadata: {
      contentType: "application/json",
    },
  });
  stream.on("error", (err) => {
    console.log(err);
  });
  stream.on("finish", () => {
    console.log(gcsname);
  });
  stream.end(Buffer.from(link));

  return data;
};

router.get(
  "/:sub/comments/:postID/:title?/:commentID?",
  async (req, res, next) => {
    let body = null;
    let data = null;
    try {
      let id = null;
      if (req.params.commentID) {
        id = req.params.commentID;
      } else {
        id = req.params.postID;
      }
      data = await getImage(id, req.params);
      body = await handlebars.compile(
        fs.readFileSync(__dirname + "/../views/site/generated.hbs", "utf8")
      );
      body = await body({ link: data.url });
    } catch (e) {
      console.log("Error:");
      console.error(e);
      res.render("error", {
        body: e,
      });
      return;
    }
    res.render("site/index", {
      title: data.title,
      body: body,
      // Render the page, right now it just displays the Imgur image. Probably want to pass the frontend off to a different route.
    });
  }
);

module.exports = router;
