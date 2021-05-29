import express from "express";
const backend = require("../api/main");
const { GoogleStorage } = require("@google-cloud/storage");
const dotenv = require("dotenv").config();
const fs = require("fs");

const storage = new GoogleStorage();
const app = express.application;

//getNewImage: "params" is arguments from the URL path, imageObject is what was returned from GCP
const getNewImage = async (params, imageObject) => {
  //Image has not been generated before.
  let postID = params.postID;
  let commentID = params.commentID;
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
    if (!imageObject.comments[commentID]) {
      imageObject.comments[commentID] = {};
    }
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

const getOldImage = async (params) => {
  let postID = params.postID;
  let commentID = params.commentID;
  let options = "";
  // console.log(postID);
  try {
    options = await storage
      .bucket(process.env.BUCKET_NAME)
      .file(postID)
      .download();
    options = options.toString();
    options = JSON.parse(options);
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
    } else if (!commentID) {
      resolve(params.redact ? options.self.redact : options.self.link);
    } else {
      resolve("");
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

app.get("/:sub/comments/:postID/:title", async (req, res, next) => {
  req.params.redact = false;
  let data = await getOldImage(req.params);
  res.send({ image: data.url });
  res.end();
});

app.get("/:sub/comments/:postID/:title/redact", async (req, res, next) => {
  req.params.redact = true;
  let data = await getOldImage(req.params);
  res.send({ image: data.url });
  res.end();
});

app.get("/:sub/comments/:postID/:title/:commentID", async (req, res, next) => {
  req.params.redact = false;
  let data = await getOldImage(req.params);
  res.send({ image: data.url });
  res.end();
});

app.get(
  "/:sub/comments/:postID/:title/:commentID/redact",
  async (req, res, next) => {
    req.params.redact = true;
    let data = await getOldImage(req.params);
    res.send({ image: data.url });
    res.end();
  }
);

module.exports = app;
