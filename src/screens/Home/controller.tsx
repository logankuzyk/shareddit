import queryString from "query-string";
import React from "react";
import { UrlParser } from "url-params-parser";

import { HomeScreenView } from "./view";

interface HomeScreenControllerProps {}

export const HomeScreenController: React.FC<
  HomeScreenControllerProps
> = ({}) => {
  const submitHandler = async (input: string) => {
    try {
      const params = UrlParser(
        input,
        "/r/:sub/comments/:postID/:title/:commentID"
      ).namedParams;
      const query = queryString.stringify(params);
      window.location.pathname = `/generate/${query}`;
    } catch (err) {
      console.error(err);
    }
  };

  return <HomeScreenView submitHandler={submitHandler} />;
};
