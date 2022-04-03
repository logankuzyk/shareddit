import React from "react";
import { Flex } from "@chakra-ui/react";

import {
  RedditSubmission,
  RedditComment,
  MoreChildren,
} from "../../types/reddit";
import { Submission } from "../../components/templates/submissions/Submission";
import { RootComment } from "../../components/templates/comments/RootComment";

interface EditorScreenViewProps {
  data: [RedditSubmission, (RedditComment | MoreChildren)[]] | undefined;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

export const EditorScreenView: React.FC<EditorScreenViewProps> = ({
  data,
  isLoading,
  isError,
  isSuccess,
}) => {
  if (isSuccess && data) {
    const submission = data[0];
    const comments = data[1];
    return (
      <Flex
        flexDirection="column"
        alignItems="left"
        justifyContent="center"
        maxWidth="40vw"
      >
        <Submission submission={submission} />
        <RootComment data={comments[0]} />
      </Flex>
    );
  } else {
    return <></>;
  }
};
