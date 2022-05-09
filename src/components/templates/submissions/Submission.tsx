import React from "react";

import { SubmissionContainer } from "./SubmissionContainer";
import { Title } from "../../typography/Title";
import { RedditSubmission } from "../../../types/reddit";
import { Tagline } from "../Tagline";
import { SubmissionContent } from "./SubmissionContent";

interface SubmissionCardProps {
  submission: RedditSubmission;
}

export const Submission: React.FC<SubmissionCardProps> = ({ submission }) => {
  const { title, author, subreddit, date, linkType, scoreString } = submission;

  return (
    <SubmissionContainer>
      {linkType !== "self" ? (
        <>
          <SubmissionContent submission={submission} />
          <Title>{title}</Title>
        </>
      ) : (
        <>
          <Title>{title}</Title>
          <SubmissionContent submission={submission} />
        </>
      )}
      <Tagline
        username={author}
        score={scoreString}
        date={date}
        subreddit={subreddit}
        type="submission"
      />
    </SubmissionContainer>
  );
};
