import React from "react";

import { useEditorData } from "../../../contexts/EditorContext";
import { SubmissionContainer } from "./SubmissionContainer";
import { Title } from "../../typography/Title";
import { RedditSubmission } from "../../../types/reddit";
import { Tagline } from "../tagline/Tagline";
import { SubmissionContent } from "./SubmissionContent";

interface SubmissionCardProps {
  submission: RedditSubmission;
}

export const Submission: React.FC<SubmissionCardProps> = ({ submission }) => {
  const { theme, isCensorUsernames, isCensorSubreddits } = useEditorData();
  const {
    title,
    author,
    subreddit_name_prefixed,
    date,
    scoreString,
    userFlair,
    awards,
  } = submission;

  return (
    <SubmissionContainer>
      <Title color={theme.contrast[300]}>{title}</Title>
      <Tagline
        censorUser={isCensorUsernames}
        censorSubreddit={isCensorSubreddits}
        username={author}
        awards={awards}
        flair={userFlair}
        score={scoreString}
        date={date}
        subreddit={subreddit_name_prefixed}
        type="submission"
      />
      <SubmissionContent submission={submission} />
    </SubmissionContainer>
  );
};
