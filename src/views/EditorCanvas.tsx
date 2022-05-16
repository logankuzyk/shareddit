import React from "react";
import { Flex } from "@chakra-ui/react";

import { useEditorContext } from "../contexts/EditorContext";
import { RedditSubmission, RedditComment, MoreChildren } from "../types/reddit";
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
  const { theme } = useEditorContext();
  const backgroundColor = theme.background["100"];

  return (
    <Flex
      direction="column"
      alignItems="left"
      justifyContent="center"
      textAlign="left"
      backgroundColor={backgroundColor}
    >
      <Submission submission={submission} />
      <RootComment data={comments[0]} />
    </Flex>
  );
};
