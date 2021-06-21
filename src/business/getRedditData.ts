import Reddit from 'snoowrap';

import {
  SkeletonRedditSubmission,
  FleshedRedditSubmission,
  RedditComment,
} from './types';
import { determinePostType, longTime, prettyScore } from './util';
import { login } from './getCredentials';

const dotenv = require('dotenv').config();

const r = new Reddit(login());

// Recursively goes through a comment's parent and builds an array. The base case is when the parent isn't a "thing" of type comment (t1).
const buildCommentChain = async (
  commentID: string
): Promise<RedditComment[]> => {
  //TODO: add something here to provent overflow
  const comment = r.getComment(commentID);
  const output: RedditComment = {
    score: `${await prettyScore(await comment.score)} points`,
    author: await comment.author.name,
    bodyHTML: await comment.body_html,
    prettyDate: await longTime(await comment.created_utc),
    parentID: await comment.parent_id,
    //@ts-ignore
    awards: await comment.all_awardings,
  };
  if (!output.parentID.startsWith('t1')) {
    return [output];
  } else {
    let arr = await buildCommentChain(output.parentID);
    arr.unshift(output);
    return arr;
  }
};

const postInfo = async (
  postID: string,
  sub: string,
  redact: boolean
): Promise<FleshedRedditSubmission> => {
  const post = r.getSubmission(postID);
  const output: FleshedRedditSubmission = {
    score: await prettyScore(await post.score),
    author: await post.author.name,
    link: await post.url,
    title: await post.title,
    prettyDate: await longTime(await post.created_utc),
    commentsCount: await post.num_comments,
    //@ts-ignore
    awards: await post.all_awardings,
    bodyHTML: await post.selftext_html,
    type: await determinePostType(await post.url),
    sub: sub,
    postID: postID,
    redact: redact,
    comments: [],
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
      post.comments = await buildCommentChain(commentID);
    }

    return post;
  } catch (err) {
    throw err;
  }
};
