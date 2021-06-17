import axios from "axios";
import queryString from "query-string";

import { FleshedRedditSubmission } from "../types";

export const getParams = async (): Promise<FleshedRedditSubmission | null> => {
  const validateParams = (params: any) => {
    const output: FleshedRedditSubmission = {
      author: params.author,
      score: params.prettyScore,
      prettyDate: params.prettyDate,
      bodyHTML: params.bodyHTML,
      awards: params.awards,
      title: params.title,
      sub: params.sub,
      comments: params.comments,
      commentsCount: params.commentsCount,
      type: params.type,
      redact: params.redact ? true : false,
    };

    return output;
  };

  const path = window.location.pathname.substr(
    10,
    window.location.pathname.length
  );
  const urlParams = queryString.parse(path);
  // console.log(urlParams);
  // const queryParams = validateParams(urlParams);
  // console.log(queryParams);
  const query = queryString.stringify(urlParams);
  // const queryURL = "http://192.53.122.196/" + query;
  const queryURL = "http://localhost:3001/" + query;

  try {
    const res = await axios.get(queryURL);
    return validateParams(res.data);
  } catch (err) {
    console.error(err);
    return null;
  }
};
