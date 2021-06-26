import Reddit from 'snoowrap';
import uniqolor from 'uniqolor';

import {
  SkeletonRedditSubmission,
  FleshedRedditSubmission,
  RedditComment,
} from './types';
import { determinePostType, longTime, prettyScore, buildAwards } from './util';
import { login } from './getCredentials';

const dotenv = require('dotenv').config();

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
    date: Number(String(await comment.created_utc) + '000'),
    parentID: await comment.parent_id,
    //@ts-ignore
    awards: buildAwards(await comment.all_awardings),
    color: redact ? uniqolor(await comment.author.name).color : null,
    child: child ? child : undefined,
  };
  if (!output.parentID.startsWith('t1')) {
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
  const type = await determinePostType(
    await post.url,
    await post.is_video,
    await post.is_self
  );
  const link =
    type === 'image' || type === 'text'
      ? await post.url
      : await post.preview.images[0].source.url;
  const output: FleshedRedditSubmission = {
    score: await prettyScore(await post.score),
    author: await post.author.name,
    link: link,
    title: await post.title,
    date: Number(String(await post.created_utc) + '000'),
    commentsCount: await post.num_comments,
    //@ts-ignore
    awards: buildAwards(await post.all_awardings),
    bodyHTML: await post.selftext_html,
    type: type,
    sub: sub,
    postID: postID,
    redact: redact,
    color: redact ? uniqolor(await post.author.name).color : null,
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
