import { Flex, FlexProps, Spinner } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";

import { useEditorData } from "../../contexts/EditorContext";
import {
  RedditSubmission,
  RedditComment,
  MoreChildren,
} from "../../types/reddit";
import { RootComment } from "../templates/comments/RootComment";
import { Submission } from "../templates/submissions/Submission";

interface EditorCanvasProps extends FlexProps {
  isLoading: boolean;
  isError: boolean;
  submission: RedditSubmission | undefined;
  comments: (RedditComment | MoreChildren)[] | undefined;
}

export const EditorCanvas: React.FC<EditorCanvasProps> = ({
  submission,
  comments,
  isLoading,
  isError,
  ...props
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { theme } = useEditorData();
  const backgroundColor = theme.background["100"];

  useEffect(() => {
    const scrollHeight = scrollRef.current?.scrollHeight;
    scrollHeight && scrollRef.current?.scrollBy(0, scrollHeight);
    setTimeout(
      () =>
        scrollHeight &&
        scrollRef.current?.scrollBy({
          top: -scrollHeight,
          left: 0,
          behavior: "smooth",
        }),
      500
    );
  }, []);

  return (
    <Flex
      alignItems="left"
      backgroundColor={backgroundColor}
      borderRadius={8}
      gap={2}
      justifyContent="center"
      overflowY="scroll"
      ref={scrollRef}
      textAlign="left"
      {...props}
    >
      <Flex direction="column" id="image-canvas">
        {comments && submission && (
          <>
            <Submission submission={submission} />
            <RootComment data={comments[0]} />
          </>
        )}
        {isLoading && <Spinner />}
      </Flex>
    </Flex>
  );
};
