import { Flex } from "@chakra-ui/react";
import React from "react";
import uniqolor from "uniqolor";

import { useEditorData } from "../../../../contexts/EditorContext";
import { RedditAward, RedditFlair } from "../../../../types/reddit";
import { Caption } from "../../../typography/Caption";
import { Awards } from "./Awards";
import { BadgeContainer } from "./BadgeContainer";
import { Flair } from "./Flair";

interface TaglineProps {
  type: "submission" | "comment";
  username: string;
  score: string;
  date: string;
  subreddit?: string;
  flair?: RedditFlair;
  count: number;
  isSubmitter?: boolean;
  censorUser: boolean;
  censorSubreddit?: boolean;
}

export const Tagline: React.FC<TaglineProps> = ({
  username,
  score,
  date,
  subreddit,
  flair,
  count,
  isSubmitter,
  censorUser,
  censorSubreddit = false,
}) => {
  const { theme } = useEditorData();
  return (
    <Flex
      alignItems="center"
      color={theme.contrast[100]}
      direction="row"
      flexWrap="wrap"
      gap={1}
    >
      {!censorUser ? (
        <Caption fontWeight={700}>{username}</Caption>
      ) : (
        <Flex
          backgroundColor={uniqolor(username).color}
          borderRadius={4}
          height={4}
          width={12}
        />
      )}
      <Caption>{"•"}</Caption>
      {isSubmitter && (
        <>
          <BadgeContainer backgroundColor={theme.special.highlight}>
            <Caption>OP</Caption>
          </BadgeContainer>
          <Caption>{"•"}</Caption>
        </>
      )}
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
          <Caption>{censorSubreddit ? "a subreddit" : subreddit}</Caption>
        </>
      )}
      {count !== 0 && (
        <>
          <Caption>{"•"}</Caption>
          <Awards count={count} />
        </>
      )}
    </Flex>
  );
};
