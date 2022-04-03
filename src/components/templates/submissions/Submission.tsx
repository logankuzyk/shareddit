import React from "react";
import { Flex } from "@chakra-ui/react";

import { SubmissionContainer } from "./SubmissionContainer";
import { Title } from "../../typography/Title";
import { RedditSubmission } from "../../../types/reddit";
import { Tagline } from "../Tagline";
import { SubmissionContent } from "./SubmissionContent";

interface SubmissionCardProps {
  submission: RedditSubmission;
}

export const Submission: React.FC<SubmissionCardProps> = ({ submission }) => {
  const { title, author, id, subreddit, date, linkType, scoreString } =
    submission;
  const tagline = [author, scoreString, date];

  return (
    <SubmissionContainer>
      {linkType !== "self" ? (
        <>
          <SubmissionContent
            style={{ marginBottom: 8 }}
            submission={submission}
          />
          <Title>{title}</Title>
          <Flex marginTop={6}>
            <Tagline content={tagline} type="submission" />
          </Flex>
        </>
      ) : (
        <>
          <Title>{title}</Title>
          <SubmissionContent submission={submission} marginY={8} />
          <Flex>
            <Tagline content={tagline} type="submission" />
          </Flex>
        </>
      )}
    </SubmissionContainer>
  );
};
