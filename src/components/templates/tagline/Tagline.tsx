import React from "react";
import { Flex } from "@chakra-ui/react";

import uniqolor from "uniqolor";
import { useEditorData } from "../../../contexts/EditorContext";
import { Caption } from "../../typography/Caption";
import { Flair } from "./Flair";
import { Awards } from "./Awards";
import { BadgeContainer } from "./BadgeContainer";
import { RedditAward, RedditFlair } from "../../../types/reddit";

interface TaglineProps {
  type: "submission" | "comment";
  username: string;
  score: string;
  date: string;
  subreddit?: string;
  flair?: RedditFlair;
  awards: RedditAward[] | undefined;
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
  awards,
  isSubmitter,
  censorUser,
  censorSubreddit = false,
}) => {
  const { theme } = useEditorData();
  return (
    <Flex
      flexWrap="wrap"
      direction="row"
      alignItems="center"
      gap={1}
      color={theme.contrast[100]}
    >
      {!censorUser ? (
        <Caption fontWeight={700}>{username}</Caption>
      ) : (
        <Flex
          width={12}
          height={4}
          borderRadius={4}
          backgroundColor={uniqolor(username).color}
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
      {awards && (
        <>
          <Caption>{"•"}</Caption>
          <Awards awards={awards} />
        </>
      )}
    </Flex>
  );
};
