import React, { useMemo } from "react";
import { Redirect } from "react-router";
import { UrlParser } from "url-params-parser";
import queryString from "query-string";

export const RedirectRedditPath: React.FC = () => {
  const path = useMemo(() => window.location.href, [window.location.pathname]);
  const params = UrlParser(
    path,
    "/r/:sub/comments/:postID/:title/:commentID"
  ).namedParams;
  const query = queryString.stringify(params);
  return <Redirect to={`/generate/${query}`} />;
};
