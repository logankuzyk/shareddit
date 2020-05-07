const Reddit = require("snoowrap");
const dotenv = require("dotenv").config();

const r = new Reddit({
  userAgent: process.env.USERAGENT,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
});

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

buildCommentChain = (comments, permalink) => {
  if (comments.length == 0) {
    return;
  } else {
    for (let comment of comments) {
      let parsed = {
        score: comment.score,
        author: comment.author.name,
        body: comment.body,
        bodyMD: comment.body_html,
        time: longTime(comment.created_utc),
      };
      if (comment.permalink == permalink) {
        return parsed;
      } else if (buildCommentChain(comment.replies, permalink) != undefined) {
        parsed.next = buildCommentChain(comment.replies, permalink);
        return parsed;
      } else {
        continue;
      }
    }
    return;
  }
};

getImage = async (postID) => {
  let url = await r.getSubmission(postID).url;
  return url;
};

// Returns title text.
getTitle = async (postID) => {
  let title = await r.getSubmission(postID).title;
  return title;
};

// Returns comments up to given comment permalink.
getComments = async (postID, permalink) => {
  let comments = await r
    .getSubmission(postID)
    .expandReplies({ limit: Infinity, depth: Infinity }).comments;
  let output = buildCommentChain(comments, permalink);
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
  output.image = await getImage(postID);
  output.title = await getTitle(postID);
  output.comments = await getComments(postID, permalink);
  return output;
};
