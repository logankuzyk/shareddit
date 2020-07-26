const express = require("express");
const router = express.Router();
const backend = require("../api/main");
const handlebars = require("handlebars");
const { Storage } = require("@google-cloud/storage");
const fs = require("fs");

const storage = new Storage();

getImage = async (id, params) => {
  if (params.censor) {
    params.censor = true;
  } else {
    params.censor = false;
  }
  const [files] = await storage.bucket(process.env.BUCKET_NAME).getFiles();
  console.log(id);

  for (let file of files) {
    fileObject = JSON.parse(file.name);
    if (fileObject.censor) {
      fileObject.censor = true;
    } else {
      fileObject.censor = false;
    }
    if (fileObject.id == id && fileObject.censor == params.censor) {
      console.log("old image");
      let link = await storage
        .bucket(process.env.BUCKET_NAME)
        .file(id)
        .download();
      link = link.toString("utf8");
      // title: fileObject.title,
      return { url: link };
    }
  }

  if (params) {
    //Image has not been generated before.
    console.log("new image");
    let data = await backend.generate(params);
    let bucket = storage.bucket(process.env.BUCKET_NAME);
    // title: data.title
    let gcsname = { name: id, censor: false };
    if (params.censor) {
      gcsname.censor = true;
    }
    gcsname = JSON.stringify(gcsname);
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
  "/:sub/comments/:postID/:title?/:commentID?/redact?",
  async (req, res, next) => {
    req.params.censor = true;
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

router.get("/:sub/comments/:postID/:title?/redact?", async (req, res, next) => {
  req.params.censor = true;
  let id = null;
  if (req.params.commentID) {
    id = req.params.commentID;
  } else {
    id = req.params.postID;
  }
  let data = await getImage(id, req.params);
  res.send({ image: data.url });
  res.end();
});
module.exports = router;
