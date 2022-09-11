import { Flex } from "@chakra-ui/react";
import React from "react";

import { useEditorData } from "../../../../contexts/EditorContext";
import { RedditSubmission } from "../../../../types/reddit";
import { Title } from "../../../typography/Title";
import { Tagline } from "../tagline/Tagline";
import { SubmissionContent } from "./SubmissionContent";

interface SubmissionCardProps {
  submission: RedditSubmission;
  commentsBeingShown: boolean;
}

export const Submission: React.FC<SubmissionCardProps> = ({
  submission,
  commentsBeingShown,
}) => {
  const { theme, isCensorUsernames, isCensorSubreddits } = useEditorData();
  const {
    title,
    author,
    subreddit_name_prefixed,
    date,
    scoreString,
    userFlair,
    awardCount,
  } = submission;

  const paddingBottom = commentsBeingShown ? 0 : 4;

  return (
    <Flex
      direction="column"
      gap="8px"
      paddingBottom={paddingBottom}
      paddingX="18px"
    >
      <Title color={theme.contrast[300]}>{title}</Title>
      <Tagline
        censorSubreddit={isCensorSubreddits}
        censorUser={isCensorUsernames}
        count={awardCount}
        date={date}
        flair={userFlair}
        score={scoreString}
        subreddit={subreddit_name_prefixed}
        type="submission"
        username={author}
      />
      <SubmissionContent submission={submission} />
    </Flex>
  );
};
