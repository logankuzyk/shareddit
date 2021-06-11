import queryString from "query-string";
import { UrlParser } from "url-params-parser";

export const submitLink = (input: string) => {
  const params = UrlParser(
    input,
    "/r/:sub/comments/:postID/:title/:commentID"
  ).namedParams;
  const query = queryString.stringify(params);
  //   window.history.replaceState(null, document.title, query);
};
