import queryString from "query-string";
import { UrlParser } from "url-params-parser";

export const submitLink = (input: string) => {
  try {
    const params = UrlParser(
      input,
      "/r/:sub/comments/:postID/:title/:commentID"
    ).namedParams;
    const query = queryString.stringify(params);
    window.location.pathname = query;
  } catch (err) {
    console.error(err);
  }
};
