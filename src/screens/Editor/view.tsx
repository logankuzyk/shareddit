import React from "react";
import { Flex } from "@chakra-ui/react";

import {
  RedditSubmission,
  RedditComment,
  MoreChildren,
} from "../../types/reddit";
import { EditorCanvas } from "../../views/EditorCanvas";
import { EditorInterface } from "../../views/EditorInterface";

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
      <Flex direction="row" gap={48}>
        <EditorCanvas submission={submission} comments={comments} />
        {/* <EditorInterface /> */}
      </Flex>
    );
  } else {
    return <></>;
  }
};
