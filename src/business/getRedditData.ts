import Reddit from 'snoowrap';

import { SkeletonRedditSubmission, FleshedRedditSubmission, RedditComment } from './types';
import { determinePostType, longTime, prettyScore }  from '../util';
import { login } from './getCredentials';

const dotenv = require("dotenv").config();

const r = new Reddit(login());

// Recursively goes through a comment's parent and builds an array. The base case is when the parent isn't a "thing" of type comment (t1).
const buildCommentChain = async (commentID: string): Promise<RedditComment[]> => {
  //TODO: add something here to provent overflow
  const comment = r.getComment(commentID);
  const output: RedditComment = {
    score: await prettyScore(comment.score),
    author: comment.author.name,
    bodyHTML: comment.body_html,
    prettyDate: await longTime(comment.created_utc),
    parentID: comment.parent_id,
    //@ts-ignore
    awards: comment.all_awardings,
  };
  if (!output.parentID.startsWith("t1")) {
    return [output];
  } else {
    let arr = await buildCommentChain(output.parentID);
    arr.unshift(output);
    return arr;
  }
};

const postInfo = async (postID: string): Promise<FleshedRedditSubmission> => {
  const post = r.getSubmission(postID);
  const url = new URL(post.url)
  const output: FleshedRedditSubmission = {
    score: await prettyScore(post.score),
    author: post.author.name,
    link: url.hostname,
    title: post.title,
    prettyDate: await longTime(post.created_utc),
    commentsCount: post.num_comments,
    //@ts-ignore
    awards: post.all_awardings,
    bodyHTML: post.selftext_html,
    type: await determinePostType(url),
    comments: [],
    sub: post.subreddit.name,
    postID: postID,
  };

  return output;
};

export default async (params: SkeletonRedditSubmission): Promise<FleshedRedditSubmission | undefined> => {
    try {
      const { postID, commentID } = params;
      const post: FleshedRedditSubmission = await postInfo(postID);
    
      if (commentID) {
        post.comments = await buildCommentChain(commentID);
      }

      return post;
    } catch (err) {
      console.error(err.body)
      return;
    }
}
