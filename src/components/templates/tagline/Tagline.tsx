import React from "react";
import { Flex } from "@chakra-ui/react";

import { Caption } from "../../typography/Caption";
import { Flair } from "./Flair";
import { RedditFlair } from "../../../types/reddit";

interface TaglineProps {
  type: "submission" | "comment";
  username: string;
  score: string;
  date: string;
  subreddit?: string;
  flair?: RedditFlair;
}

export const Tagline: React.FC<TaglineProps> = ({
  username,
  score,
  date,
  subreddit,
  flair,
}) => {
  return (
    <Flex flexWrap="wrap" direction="row" alignItems="center" gap={1}>
      <Caption fontWeight={700}>{username}</Caption>
      <Caption>{"•"}</Caption>
      {flair && (
        <>
          <Flair flair={flair} />
          <Caption>{"•"}</Caption>
        </>
      )}
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
