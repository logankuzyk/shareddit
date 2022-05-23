import React from "react";

import { EditorScreenController } from "./controller";

export const EditorScreenProvider: React.FC = () => {
  const params = new URLSearchParams(
    `?${window.location.pathname.substring(
      10,
      window.location.pathname.length
    )}`
  );
  const subreddit = params.get("sub");
  const postId = params.get("postID");

  if (subreddit && postId) {
    return <EditorScreenController postId={postId} subreddit={subreddit} />;
  } else {
    return <></>;
  }
};
