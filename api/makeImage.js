const fs = require("fs");
const handlebars = require("handlebars");
const puppeteer = require("puppeteer");
const sizeOf = require("image-size");
const unirest = require("unirest");
const imageToBase64 = require("image-to-base64");
const dotenv = require("dotenv").config();

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
    fs.readFileSync(__dirname + "/../views/comment.hbs", "utf8")
  );
  // Title parameters:
  //   score,
  //   link (original image link),
  //   submissionTitle,
  //   time,
  //   author,
  //   commentsCount,
  render.title = handlebars.compile(
    fs.readFileSync(__dirname + "/../views/title.hbs", "utf8")
  );
  // Final parameters (HTML code):
  //   submission,
  //   image,
  //   comments,
  render.final = handlebars.compile(
    fs.readFileSync(__dirname + "/../views/final.hbs", "utf8")
  );
  let params = {
    title: {
      score: data.submission.score,
      link: data.submission.link,
      submissionTitle: data.submission.title,
      time: data.submission.time,
      author: data.submission.author,
      commentsCount: data.submission.commentsCount,
    },
    final: {
      submission: "",
      // image: data.submission.link,
      comments: "",
    },
  };
  params.final.submission = render.title(params.title);
  // No comments, simply return image and title.
  if (data.comments) {
    for (let comment of data.comments) {
      params.comments = {
        author: comment.author,
        commentHTML: comment.bodyMD,
        score: comment.score,
        time: comment.time,
        child: params.final.comment,
      };
      params.final.comments = render.comment(params.comments);
    }
  }
  // console.log(params.final);
  // console.log(render.final(params.final));
  return render.final(params.final);
};

// Encodes image and uploads it with the Imgur API, returns direct URL of uploaded image.
uploadImage = async () => {
  let img = await imageToBase64(__dirname + "/../cache/output.png");
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
  const browser = await puppeteer.launch({ defaultViewport: null });
  const page = await browser.newPage();
  await page.setContent(html);
  let size = sizeOf(__dirname + "/../cache/input.png");
  console.log({ width: size.width });
  await page.screenshot({
    path: __dirname + "/../cache/output.png",
    fullPage: true,
  });
  await browser.close();
};

module.exports = async (data) => {
  let source = await generateHTML(data);
  await generateImage(source);
  let url = await uploadImage();
  console.log(url);
  return url;
};
