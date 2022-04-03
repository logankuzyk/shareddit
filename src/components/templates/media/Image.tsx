import React from "react";

import { RedditSubmission } from "../../../types/reddit";

interface ImageProps {
  submission: RedditSubmission;
}

export const Image: React.FC<ImageProps> = ({ submission }) => {
  const { url } = submission;

  if (url) {
    return <img src={url} style={{ height: "100%", width: "100%" }} />;
  } else {
    return <></>;
  }
};
