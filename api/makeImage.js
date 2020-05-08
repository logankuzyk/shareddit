const htmlToImage = require("node-html-to-image");
const fs = require("fs");
const handlebars = require("handlebars");
const imgur = require("imgur");
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
      params.link = data.link;
    }
    renderedComments = template(params);
  }
  return renderedComments;
};

uploadImage = async () => {
  imgur.setAPIUrl("imgur-apiv3.p.rapidapi.com");
  imgur.setClientId(process.env.RAPIDKEY);
  let url = "";
  imgur.uploadFile(__dirname + "/image.png").then((json) => {
    console.log(json.data.link);
    url = json.data.link;
  });
};

generateImage = async (html) => {
  htmlToImage({
    output: __dirname + "/image.png",
    html: html,
  });
};

module.exports = async (data) => {
  let source = await generateHTML(data);
  generateImage(source).then(uploadImage);
};
