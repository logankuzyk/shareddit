const fs = require("fs");
const handlebars = require("handlebars");
const puppeteer = require("puppeteer");
const sizeOf = require("image-size");
const unirest = require("unirest");
const imageToBase64 = require("image-to-base64");
const dotenv = require("dotenv").config();

generateHTML = async (data) => {
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
      params.id = "content";
      params.link = data.link;
    }
    renderedComments = template(params);
  }
  return renderedComments;
};

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
