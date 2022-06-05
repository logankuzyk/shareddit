import React from "react";

import { EditorContextProvider } from "../../contexts/EditorContext";
import { useRedditData } from "../../hooks/useRedditData";
import { EditorScreenView } from "./view";

interface EditorScreenControllerProps {
  subreddit: string;
  postId: string;
  commentId: string | null;
}

export const EditorScreenController: React.FC<EditorScreenControllerProps> = ({
  subreddit,
  postId,
  commentId,
}) => {
  const { data, isLoading, isError } = useRedditData(
    subreddit,
    postId,
    commentId
  );

  return (
    <EditorContextProvider>
      <EditorScreenView data={data} isError={isError} isLoading={isLoading} />
    </EditorContextProvider>
  );
};
