import { AxiosInstance } from "axios";
import { useQuery } from "react-query";

import { parseComments } from "../functions/util/parseComments";
import { parseSubmission } from "../functions/util/parseSubmission";
import {
  CommentSort,
  Listing,
  RedditComment,
  RedditSubmission,
  MoreChildren,
  ListedRawComment,
  ListedRawSubmission,
} from "../types/reddit";
import { useAxios } from "./useAxios";

const fetchRedditData = async (
  axios: AxiosInstance,
  subreddit: string,
  postId: string,
  commentId: string | null,
  sort: CommentSort
): Promise<[RedditSubmission, Array<RedditComment | MoreChildren>]> => {
  const endpoint = commentId
    ? `/r/${subreddit}/comments/${postId}/title/${commentId}.json?context=10000&raw_json=1&sort=${sort}`
    : `/r/${subreddit}/comments/${postId}/.json?raw_json=1&sort=${sort}`;
  const res = await axios.get<
    [Listing<ListedRawSubmission>, Listing<ListedRawComment>]
  >(endpoint);
  const submissionListing = res.data[0];
  const commentListing = res.data[1];

  const modhash = submissionListing.data.modhash;
  const rawSubmission = submissionListing.data.children[0].data;
  const rawComments = commentListing.data.children;

  const submission = parseSubmission(rawSubmission, modhash);
  const comments = parseComments(rawComments, modhash);

  return [submission, comments];
};

export const useRedditData = (
  subreddit: string,
  postId: string,
  commentId: string | null,
  sort: CommentSort
) => {
  const axios = useAxios();
  return useQuery(["comments", subreddit, postId, commentId, sort], () =>
    fetchRedditData(axios, subreddit, postId, commentId, sort)
  );
};
