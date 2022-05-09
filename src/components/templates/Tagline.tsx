import React from "react";
import { Flex } from "@chakra-ui/react";

import { Caption } from "../typography/Caption";

interface TaglineProps {
  type: "submission" | "comment";
  username: string;
  score: string;
  date: string;
  subreddit?: string;
  flair?: string;
}

export const Tagline: React.FC<TaglineProps> = ({
  username,
  score,
  date,
  subreddit,
}) => {
  return (
    <Flex flexWrap="wrap" direction="row" gap={1}>
      <Caption>{username}</Caption>
      <Caption>{"•"}</Caption>
      <Caption>{score}</Caption>
      <Caption>{"•"}</Caption>
      <Caption>{date}</Caption>
      {subreddit && (
        <>
          <Caption>{"•"}</Caption>
          <Caption>
            {"/r/"}
            {subreddit}
          </Caption>
        </>
      )}
    </Flex>
  );
};
