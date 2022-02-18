import axios from "axios";
import queryString from "query-string";
import ReactGA from "react-ga";

import { FleshedRedditSubmission } from "../types";
import { storeParams } from "./storeParams";

export const getParams = async (
  refresh: boolean
): Promise<FleshedRedditSubmission> => {
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

  if (cache !== null && !refresh) {
    const data = JSON.parse(cache);

    if (data.key === query) {
      ReactGA.event({
        category: "Content Fetching",
        action: "Retrieved Cached Data",
      });
      return validateParams(data);
    } else {
      localStorage.removeItem("shareddit-content");
    }
  }

  const queryURL = "/netlify/functions/fetch-reddit-data" + query;

  try {
    const res = await axios.get(queryURL);
    const validatedParams = validateParams(res.data);

    ReactGA.event({
      category: "Content Fetching",
      action: "Fetched Content From Cloud Function",
    });

    storeParams(query, validatedParams);
    return validatedParams;
  } catch (err) {
    console.error(err);
    //@ts-ignore
    return err.message;
  }
};
