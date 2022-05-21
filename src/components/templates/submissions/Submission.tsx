import React from "react";

import { useEditorData } from "../../../contexts/EditorContext";
import { RedditSubmission } from "../../../types/reddit";
import { Title } from "../../typography/Title";
import { Tagline } from "../tagline/Tagline";
import { SubmissionContainer } from "./SubmissionContainer";
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
        awards={awards}
        censorSubreddit={isCensorSubreddits}
        censorUser={isCensorUsernames}
        date={date}
        flair={userFlair}
        score={scoreString}
        subreddit={subreddit_name_prefixed}
        type="submission"
        username={author}
      />
      <SubmissionContent submission={submission} />
    </SubmissionContainer>
  );
};
