import React from "react";

import { useEditorContext } from "../../../contexts/EditorContext";
import { SubmissionContainer } from "./SubmissionContainer";
import { Title } from "../../typography/Title";
import { RedditSubmission } from "../../../types/reddit";
import { Tagline } from "../tagline/Tagline";
import { SubmissionContent } from "./SubmissionContent";

interface SubmissionCardProps {
  submission: RedditSubmission;
}

export const Submission: React.FC<SubmissionCardProps> = ({ submission }) => {
  const { theme } = useEditorContext();
  const { title, author, subreddit, date, scoreString, userFlair, awards } =
    submission;

  return (
    <SubmissionContainer>
      <Title color={theme.contrast[300]}>{title}</Title>
      <Tagline
        username={author}
        awards={awards}
        flair={userFlair}
        score={scoreString}
        date={date}
        subreddit={subreddit}
        type="submission"
      />
      <SubmissionContent submission={submission} />
    </SubmissionContainer>
  );
};
