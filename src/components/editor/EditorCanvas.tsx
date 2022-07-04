import { Flex, FlexProps, Spinner } from "@chakra-ui/react";
import React from "react";

import { useEditorData } from "../../contexts/EditorContext";
import { lightTheme } from "../../styles/themes";
import {
  RedditSubmission,
  RedditComment,
  MoreChildren,
} from "../../types/reddit";
import { Paragraph } from "../typography";
import { RootComment } from "./templates/comments/RootComment";
import { Submission } from "./templates/submissions/Submission";

interface EditorCanvasProps extends FlexProps {
  isLoading: boolean;
  isError: boolean;
  submission: RedditSubmission | undefined;
  comments: (RedditComment | MoreChildren)[] | undefined;
  scrollRef: React.RefObject<HTMLDivElement>;
}

export const EditorCanvas: React.FC<EditorCanvasProps> = ({
  submission,
  comments,
  isLoading,
  isError,
  scrollRef,
  ...props
}) => {
  const { theme, showComments, topLevelComments } = useEditorData();
  const backgroundColor = theme.background["100"];
  const align = !isLoading && !isError ? "left" : "center";
  const justify = !isLoading && !isError ? "left" : "center";

  return (
    <Flex
      align={align}
      backgroundColor={backgroundColor}
      borderRadius="8px"
      boxShadow="sm"
      direction="column"
      gap="2px"
      id="image-canvas"
      justify={justify}
      overflowY="scroll"
      ref={scrollRef}
      textAlign="left"
      {...props}
    >
      {submission && <Submission submission={submission} />}
      {comments && showComments && (
        <>
          {comments.slice(0, topLevelComments).map((comment) => (
            <RootComment data={comment} key={comment.id} />
          ))}
        </>
      )}
      {isLoading && <Spinner />}
      {isError && (
        <Paragraph color={lightTheme.accents[100]}>
          Something went wrong 😔
        </Paragraph>
      )}
    </Flex>
  );
};
