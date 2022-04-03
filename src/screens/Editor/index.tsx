import React from "react";

import { EditorScreenController } from "./controller";

interface EditorScreenProviderProps {}

export const EditorScreenProvider: React.FC<
  EditorScreenProviderProps
> = ({}) => {
  const params = new URLSearchParams(
    `?${window.location.pathname.substring(
      10,
      window.location.pathname.length
    )}`
  );
  const subreddit = params.get("sub");
  const postId = params.get("postID");

  if (subreddit && postId) {
    return <EditorScreenController subreddit={subreddit} postId={postId} />;
  } else {
    return <></>;
  }
};
