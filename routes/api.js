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
      link = link.toString("utf8");
      return { title: "", url: link };
    }
  }

  if (params) {
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
  }
};

// router.get("/image/:id", async (req, res, next) => {
//   let data = null;
//   try {
//     data = await getImage(id);
//     res.send(data);
//   } catch (e) {
//     console.log("Error:");
//     console.error(e);
//     res.sendStatus(500);
//     return;
//   }
// });

router.get(
  "/:sub/comments/:postID/:title?/:commentID?",
  async (req, res, next) => {
    let id = null;
    if (req.params.commentID) {
      id = req.params.commentID;
    } else {
      id = req.params.postID;
    }
    let data = await getImage(id, req.params);
    res.send({ image: data.url });
    res.end();
  }
);

module.exports = router;
