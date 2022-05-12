import React from "react";

import { EditorScreenView } from "./view";
import { EditorContextProvider } from "../../contexts/EditorContext";
import { useRedditData } from "../../hooks/useRedditData";

interface EditorScreenControllerProps {
  subreddit: string;
  postId: string;
}

export const EditorScreenController: React.FC<EditorScreenControllerProps> = ({
  subreddit,
  postId,
}) => {
  const { data, isLoading, isError, isSuccess } = useRedditData(
    subreddit,
    postId
  );

  const handleDownload = async () => {};
  const handleCopy = async () => {};
  const svgToImage = async () => {};

  return (
    <EditorContextProvider>
      <EditorScreenView
        data={data}
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
      />
    </EditorContextProvider>
  );
};
