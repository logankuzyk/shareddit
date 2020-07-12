const fs = require("fs");
const handlebars = require("handlebars");
const puppeteer = require("puppeteer");
const unirest = require("unirest");
const dotenv = require("dotenv").config();
const makeThumbnail = require("simple-thumbnail");

// Uses handlebars to generate the comment HTML and returns [the source].
generateHTML = async (data) => {
  let render = {};
  // Comment parameters:
  //   author,
  //   score,
  //   time,
  //   commentHTML,
  //   child,
  render.comment = handlebars.compile(
    fs.readFileSync(__dirname + "/../views/api/comment.hbs", "utf8")
  );
  // Title parameters:
  //   score,
  //   link (original image link),
  //   submissionTitle,
  //   time,
  //   author,
  //   commentsCount,
  //   sub,
  // render.title = handlebars.compile(
  //   fs.readFileSync(__dirname + "/../views/title.hbs", "utf8")
  // );
  // Final parameters (HTML code):
  //   submission,
  //   image,
  //   comments,
  render.final = handlebars.compile(
    fs.readFileSync(__dirname + "/../views/api/final.hbs", "utf8")
  );
  let params = {
    title: {
      score: data.submission.score,
      link: data.submission.link,
      submissionTitle: data.submission.title,
      time: data.submission.time,
      author: data.submission.author,
      commentsCount: data.submission.commentsCount,
      sub: data.submission.sub,
      text: data.submission.text,
    },
    final: {
      submission: "",
      // image: data.submission.link,
      comments: "",
    },
  };
  if (data.submission.type == "image") {
    render.title = handlebars.compile(
      fs.readFileSync(__dirname + "/../views/api/imageSubmission.hbs", "utf8")
    );
  } else {
    if (data.submission.hasText) {
      render.text = handlebars.compile(
        fs.readFileSync(__dirname + "/../views/api/selfText.hbs", "utf8")
      );
      params.title.text = render.text({ text: data.submission.text });
    }

    if (data.submission.type == "text") {
      params.title.link = "self." + params.title.sub;
    }

    render.title = handlebars.compile(
      fs.readFileSync(__dirname + "/../views/api/textSubmission.hbs", "utf8")
    );
  }
  params.final.submission = render.title(params.title);
  // No comments, simply return image and title.
  if (data.comments) {
    for (let comment of data.comments) {
      params.comments = {
        author: comment.author,
        commentHTML: comment.bodyMD,
        score: comment.score,
        time: comment.time,
        child: params.final.comments,
      };
      params.final.comments = render.comment(params.comments);
    }
  }
  return render.final(params.final);
};

// Takes base64 encoded image and uploads it with the Imgur API, returns direct URL of uploaded image.
uploadImage = async (img) => {
  let url = "";
  return new Promise((resolve, reject) => {
    unirest("POST", "https://imgur-apiv3.p.rapidapi.com/3/image")
      .headers({
        "x-rapidapi-host": "imgur-apiv3.p.rapidapi.com",
        "x-rapidapi-key": process.env.RAPID_KEY,
        authorization: "Bearer " + process.env.IMGUR_ACCESS_TOKEN,
      })
      .field("image", img)
      .end((res) => {
        if (res.error) {
          reject();
          throw new Error(res.error);
        }
        url = res.body.data.link;
        resolve(url);
      });
  });
};

// Renders HTML with puppeteer and takes a screenshot, saving it to the cache folder.
generateImage = async (html) => {
  const browser = await puppeteer.launch({
    defaultViewport: null,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1920,
    deviceScaleFactor: 2,
  });
  await page.setContent(html);
  const inputElement = await page.$("#content");
  let buffer = await inputElement.screenshot({
    encoding: "base64",
  });

  await browser.close();

  return buffer;
};

cacheUrl = async (url) => {};

module.exports = async (data) => {
  let source = await generateHTML(data);
  let image = await generateImage(source);
  let url = await uploadImage(image);
  console.log(url);
  return url;
};
