import { Flex, Fade, Spinner } from "@chakra-ui/react";
import React from "react";

import { EditorCanvas } from "../../components/editor/EditorCanvas";
import { EditorInterface } from "../../components/editor/EditorInterface";
import { Title } from "../../components/typography/Title";
import {
  RedditSubmission,
  RedditComment,
  MoreChildren,
} from "../../types/reddit";

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
      <Fade in>
        <Flex
          backgroundColor="lightgrey"
          borderRadius={8}
          gap={12}
          maxHeight="80vh"
          overflow="hidden"
          padding={2}
        >
          <Flex direction="column" gap={2}>
            <Title>Image Preview</Title>
            <EditorCanvas comments={comments} submission={submission} />
          </Flex>
          <Flex direction="column" gap={2}>
            <Title>Image Options</Title>
            <EditorInterface />
          </Flex>
        </Flex>
      </Fade>
    );
  } else if (isError) {
    return <></>;
  } else if (isLoading) {
    return <Spinner />;
  } else {
    return <></>;
  }
};
