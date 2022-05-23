import React from "react";

import { HomeScreenView } from "./view";

export const HomeScreenController: React.FC = () => {
  const handleSubmit = (input: string) => {
    const redditUrlFormat =
      /\/r\/(?<sub>[\w]+)\/comments\/(?<postID>[\w]+)[/\w]*\/*(?<commentID>[\w]*)/;

    try {
      if (!input) {
        return;
      }
      const url = new URL(input);
      const { pathname } = url;
      if (!redditUrlFormat.test(pathname)) {
        throw new Error("Please enter a reddit submission or comment URL");
      }
      const redditParams = redditUrlFormat.exec(pathname)?.groups as Record<
        string,
        string
      >;
      const urlParams = new URLSearchParams(redditParams);
      window.location.href = `/generate?${urlParams.toString()}`;
    } catch (error: unknown) {
      throw Error(error as string);
    }
  };

  return <HomeScreenView onSubmit={handleSubmit} />;
};
