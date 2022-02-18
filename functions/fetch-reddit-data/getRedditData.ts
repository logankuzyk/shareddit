import * as Reddit from "snoowrap";

import {
  SkeletonRedditSubmission,
  FleshedRedditSubmission,
  RedditComment,
} from "./types";
import {
  determinePostType,
  prettyScore,
  buildAwards,
  extractAlbumImages,
} from "./util";
import { login } from "./getCredentials";

const dotenv = require("dotenv").config();

const r = new Reddit(login());

// Recursively goes through a comment's parent and builds an array. The base case is when the parent isn't a "thing" of type comment (t1).
const buildCommentChain = async (
  commentID: string,
  redact: boolean,
  child?: RedditComment
): Promise<RedditComment> => {
  //TODO: add something here to provent overflow
  const comment = r.getComment(commentID);
  const output: RedditComment = {
    score: await prettyScore(await comment.score),
    author: await comment.author.name,
    bodyHTML: await comment.body_html,
    date: Number(String(await comment.created_utc) + "000"),
    parentID: await comment.parent_id,
    //@ts-ignore
    awards: await buildAwards(await comment.all_awardings),
    child: child ? child : undefined,
  };
  if (!output.parentID.startsWith("t1")) {
    return output;
  } else {
    const parent = await buildCommentChain(output.parentID, redact, output);
    return parent;
  }
};

const postInfo = async (
  postID: string,
  sub: string,
  redact: boolean
): Promise<FleshedRedditSubmission> => {
  const post = r.getSubmission(postID);

  const score = await post.score;
  const name = await post.author.name;
  const title = await post.title;
  const created_utc = await post.created_utc;
  const num_comments = await post.num_comments;
  //@ts-ignore
  const all_awardings = await post.all_awardings;
  const selftext_html = await post.selftext_html;
  const url = await post.url;
  const is_video = await post.is_video;
  const is_self = await post.is_self;
  const preview = await post.preview;
  //@ts-ignore
  const media_metadata = await post.media_metadata;

  const type = await determinePostType(url, is_video, is_self);

  let thumbnail = null;
  let link = url;
  switch (type) {
    case "image":
      thumbnail = url;
      break;
    case "video":
      link = "https://v.redd.it";
      if (preview && preview.images[0].source.url) {
        thumbnail = preview.images[0].source.url;
      }
      break;
    case "album":
      thumbnail = await extractAlbumImages(media_metadata);
      break;
    case "text":
      break;
    case "link":
      if (preview && preview.images[0].source.url) {
        thumbnail = preview.images[0].source.url;
      }
      break;
  }

  const output: FleshedRedditSubmission = {
    score: await prettyScore(score),
    author: name,
    link: link,
    title: title,
    date: Number(String(created_utc) + "000"),
    commentsCount: num_comments,
    //@ts-ignore
    awards: await buildAwards(all_awardings),
    bodyHTML: selftext_html,
    type: type,
    sub: sub,
    postID: postID,
    redact: redact,
    thumbnail: thumbnail,
  };

  return output;
};

export default async (
  params: SkeletonRedditSubmission
): Promise<FleshedRedditSubmission> => {
  try {
    const { postID, commentID, redact, sub } = params;
    const post: FleshedRedditSubmission = await postInfo(postID, sub, redact);

    if (commentID) {
      post.comments = await buildCommentChain(commentID, redact);
    }

    return post;
  } catch (err) {
    throw err;
  }
};
