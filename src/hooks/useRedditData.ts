import { AxiosInstance } from "axios";
import { useQuery } from "react-query";

import { parseComments } from "../util/parseComments";
import { parseSubmission } from "../util/parseSubmission";
import { useAxios } from "./useAxios";
import {
  Listing,
  RedditComment,
  RedditSubmission,
  MoreChildren,
  ListedRawComment,
  ListedRawSubmission,
} from "../types/reddit";

const fetchRedditData = async (
  axios: AxiosInstance,
  subreddit: string,
  postId: string
): Promise<[RedditSubmission, Array<RedditComment | MoreChildren>]> => {
  const res = await axios.get<
    [Listing<ListedRawSubmission>, Listing<ListedRawComment>]
  >(`/r/${subreddit}/comments/${postId}/.json`);
  const submissionListing = res.data[0];
  const commentListing = res.data[1];

  const modhash = submissionListing.data.modhash;
  const submission = submissionListing.data.children[0].data;
  const rawComments = commentListing.data.children;

  const comments = parseComments(rawComments, modhash);

  return [parseSubmission(submission, modhash), comments];
};

export const useRedditData = (subreddit: string, postId: string) => {
  const axios = useAxios();
  return useQuery(["comments", subreddit, postId], () =>
    fetchRedditData(axios, subreddit, postId)
  );
};
