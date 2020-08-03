const express = require("express");
const router = express.Router();
const backend = require("../api/main");
const { Storage } = require("@google-cloud/storage");
const fs = require("fs");

const storage = new Storage();

getNewImage = async (params, imageObject) => {
  //Image has not been generated before.
  let postID = params.postID;
  let commentID = params.commentID;
  console.log("new image");
  let data = await backend.generate(params);
  let bucket = storage.bucket(process.env.BUCKET_NAME);
  // title: data.title
  let gcsname = postID;
  let file = bucket.file(gcsname);
  let link = data.url;

  if (!imageObject) {
    imageObject = {
      comments: {},
      self: {},
    };
  }

  if (params.commentID) {
    if (params.redact) {
      imageObject.comments[commentID].redact = link;
    } else {
      imageObject.comments[commentID].link = link;
    }
  } else {
    if (params.redact) {
      imageObject.self.redact = link;
    } else {
      imageObject.self.link = link;
    }
  }

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
  stream.end(Buffer.from(JSON.stringify(imageObject)));
  return data.url;
};

getOldImage = async (params) => {
  let postID = params.postID;
  let commentID = params.commentID;
  let options = "";
  // console.log(postID);
  try {
    options = await storage
      .bucket(process.env.BUCKET_NAME)
      .file(postID)
      .download();
    options = options.toString("utf8");
    options = JSON.parse(options);
    console.log(options);
  } catch {
    return { url: await getNewImage(params) };
  }

  let link = new Promise((resolve, reject) => {
    if (commentID && options.comments[commentID]) {
      resolve(
        params.redact
          ? options.comments[commentID].redact
          : options.comments[commentID].link
      );
    } else {
      resolve(params.redact ? options.self.redact : options.self.link);
    }
  }).then(async (link) => {
    if (!link) {
      return await getNewImage(params, options);
    } else {
      return link;
    }
  });
  return { url: await link };
};

router.get("/:sub/comments/:postID/:title", async (req, res, next) => {
  req.params.redact = false;
  let data = await getOldImage(req.params);
  res.send({ image: data.url });
  res.end();
});

router.get("/:sub/comments/:postID/:title/redact", async (req, res, next) => {
  req.params.redact = true;
  let data = await getOldImage(req.params);
  res.send({ image: data.url });
  res.end();
});

router.get(
  "/:sub/comments/:postID/:title/:commentID?",
  async (req, res, next) => {
    req.params.redact = false;
    let data = await getOldImage(req.params);
    res.send({ image: data.url });
    res.end();
  }
);

router.get(
  "/:sub/comments/:postID/:title/:commentID/redact",
  async (req, res, next) => {
    req.params.redact = true;
    let data = await getOldImage(req.params);
    res.send({ image: data.url });
    res.end();
  }
);

module.exports = router;
