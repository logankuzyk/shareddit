import axios from "axios";
import queryString from "query-string";

import { FleshedRedditSubmission } from "../types";

export const getParams = async (): Promise<FleshedRedditSubmission> => {
  const validateParams = (params: any) => {
    if (params && params.status && params.status.code === "error") {
      throw new Error(params.status.message);
    }

    const output: FleshedRedditSubmission = {
      author: params.author,
      score: params.score,
      date: params.date,
      bodyHTML: params.bodyHTML,
      awards: params.awards,
      title: params.title,
      sub: params.sub,
      comments: params.comments,
      commentsCount: params.commentsCount,
      type: params.type,
      link: params.link,
      thumbnail: params.thumbnail,
      redact: params.redact ? true : false,
    };

    return output;
  };

  const path = window.location.pathname.substr(
    10,
    window.location.pathname.length
  );
  const urlParams = queryString.parse(path);
  const query = queryString.stringify(urlParams);
  const queryURL = "https://server.shareddit.com/generate/" + query;

  try {
    const res = await axios.get(queryURL);
    return validateParams(res.data);
  } catch (err) {
    console.error(err);
    return err.message;
  }
};
