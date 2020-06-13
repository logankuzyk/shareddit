const Reddit = require("snoowrap");
const fs = require("fs");
const request = require("request");
const dotenv = require("dotenv").config();

const r = new Reddit({
  userAgent: process.env.USERAGENT,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
});

downloadImage = async (url) => {
  if (!fs.existsSync(__dirname + "/../cache")) {
    fs.mkdirSync(__dirname + "/../cache");
  }
  request(url).pipe(fs.createWriteStream(__dirname + "/../cache/input.png"));
};

// Turns current UTC epoch time into a readable format, the same shown on reddit comments.
longTime = (utc) => {
  let date = new Date();
  let delta = date.getTime() / 1000 - utc;
  if (Math.floor(delta / 60) < 1) {
    return "just now";
  } else if (Math.floor(delta / 60) < 60) {
    if (Math.floor(delta / 60) == 1) {
      return "1 minute ago";
    } else {
      return Math.floor(delta / 60) + " minutes ago";
    }
  } else if (Math.floor(delta / 3600) < 24) {
    if (Math.floor(delta / 3600) == 1) {
      return "1 hour ago";
    } else {
      return Math.floor(delta / 3600) + " hours ago";
    }
  } else if (Math.floor(delta / 86400) < 365) {
    if (Math.floor(delta / 86400) == 1) {
      return "1 day ago";
    } else {
      return Math.floor(delta / 86400) + " days ago";
    }
  } else {
    if (Math.floor(delta / 31536000) == 1) {
      return "1 year ago";
    } else {
      return Math.floor(delta / 31536000) + " years ago";
    }
  }
};

// Recursively goes through a comment's parent and builds an array. The base case is when the parent isn't a comment "thing" (t1).
buildCommentChain = async (id) => {
  let comment = await r.getComment(id);
  let parsed = {
    score: (await comment.score) + " points",
    author: await comment.author.name,
    body: await comment.body,
    bodyMD: await comment.body_html,
    time: await longTime(await comment.created_utc),
    parent: await comment.parent_id,
  };
  console.log(parsed);
  if (!parsed.parent.startsWith("t1")) {
    return [parsed];
  } else {
    let arr = await buildCommentChain(parsed.parent);
    arr.push(parsed);
    return arr;
  }
};

postInfo = async (id) => {
  let post = await r.getSubmission(id);
  let output = {
    score: await post.score,
    link: await post.url,
    title: await r.getSubmission(id).title,
    time: await longTime(await post.created_utc),
    author: await post.author.name,
    commentsCount: await post.num_comments,
  };
  return output;
};

module.exports.getData = async (params) => {
  let output = {};
  let postID = params.postID;
  let permalink =
    "/r/" +
    params.sub +
    "/" +
    "comments/" +
    params.postID +
    "/" +
    params.title +
    "/" +
    params.commentID +
    "/";
  console.log(params);
  try {
    await console.log("before " + r.ratelimitRemaining);
    output.submission = await postInfo(postID);
    downloadImage(output.submission.link);
    if (params.commentID) {
      output.comments = await buildCommentChain(params.commentID);
    }
    await console.log("after " + r.ratelimitRemaining);
  } catch (err) {
    console.log(err);
  }
  return output;
};
