import React from "react";

import "../../../style/redditThemes/old.css";
import { RedditContext } from "../../RedditContext";
import { useContext } from "react";

export const LinkSubmission: React.FC = () => {
  const context = useContext(RedditContext);

  const { author, score, prettyDate, sub, link, title, commentsCount, redact } =
    context.content;

  return <div></div>;
};
