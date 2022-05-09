import React from "react";
import { Flex } from "@chakra-ui/react";

import { RedditSubmission, RedditComment, MoreChildren } from "../types/reddit";
import { EditorContextProvider } from "../contexts/EditorContext";
import { Submission } from "../components/templates/submissions/Submission";
import { RootComment } from "../components/templates/comments/RootComment";

interface EditorCanvasProps {
  submission: RedditSubmission;
  comments: (RedditComment | MoreChildren)[];
}

export const EditorCanvas: React.FC<EditorCanvasProps> = ({
  submission,
  comments,
}) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="left"
      justifyContent="center"
      maxWidth="40vw"
      textAlign="left"
    >
      <EditorContextProvider>
        <Submission submission={submission} />
        <RootComment data={comments[0]} />
      </EditorContextProvider>
    </Flex>
  );
};
