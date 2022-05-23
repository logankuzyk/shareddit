import React from "react";

import { EditorScreenController } from "./controller";

export const EditorScreenProvider: React.FC = () => {
  const redditParams = window.location.search;
  const params = new URLSearchParams(redditParams);

  const subreddit = params.get("sub");
  const postId = params.get("postID");
  const commentId = params.get("commentID");

  if (subreddit && postId) {
    return (
      <EditorScreenController
        commentId={commentId}
        postId={postId}
        subreddit={subreddit}
      />
    );
  } else {
    return <></>;
  }
};
