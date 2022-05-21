import React, { useEffect, useRef } from "react";
import { Flex, FlexProps } from "@chakra-ui/react";

import { useEditorData } from "../../contexts/EditorContext";
import {
  RedditSubmission,
  RedditComment,
  MoreChildren,
} from "../../types/reddit";
import { Submission } from "../templates/submissions/Submission";
import { RootComment } from "../templates/comments/RootComment";

interface EditorCanvasProps extends FlexProps {
  submission: RedditSubmission;
  comments: (RedditComment | MoreChildren)[];
}

export const EditorCanvas: React.FC<EditorCanvasProps> = ({
  submission,
  comments,
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
      borderRadius={8}
      gap={2}
      alignItems="left"
      justifyContent="center"
      textAlign="left"
      backgroundColor={backgroundColor}
      overflowY="scroll"
      ref={scrollRef}
      {...props}
    >
      <Flex direction="column" id="image-canvas">
        <Submission submission={submission} />
        <RootComment data={comments[0]} />
      </Flex>
    </Flex>
  );
};
