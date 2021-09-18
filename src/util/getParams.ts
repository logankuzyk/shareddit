import axios from "axios";
import queryString from "query-string";

import { FleshedRedditSubmission } from "../types";
import { storeParams } from "./storeParams";

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

  const cache = localStorage.getItem("shareddit-content");

  if (cache !== null) {
    const data = JSON.parse(cache);

    if (data.key === query) {
      return validateParams(data);
    } else {
      localStorage.removeItem("shareddit-content");
    }
  }

  const queryURL = "https://server.shareddit.com/generate/" + query;

  try {
    const res = await axios.get(queryURL);
    const validatedParams = validateParams(res.data);

    storeParams(query, validatedParams);
    return validatedParams;
  } catch (err) {
    console.error(err);
    //@ts-ignore
    return err.message;
  }
};
