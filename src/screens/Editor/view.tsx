import { Flex, Fade } from "@chakra-ui/react";
import React from "react";

import { EditorCanvas } from "../../components/editor/EditorCanvas";
import { EditorInterface } from "../../components/editor/EditorInterface";
import { Title } from "../../components/typography/Title";
import { lightTheme } from "../../styles/themes";
import {
  RedditSubmission,
  RedditComment,
  MoreChildren,
} from "../../types/reddit";

interface EditorScreenViewProps {
  data: [RedditSubmission, (RedditComment | MoreChildren)[]] | undefined;
  isLoading: boolean;
  isError: boolean;
}

export const EditorScreenView: React.FC<EditorScreenViewProps> = ({
  data,
  isLoading,
  isError,
}) => {
  const submission = data ? data[0] : undefined;
  const comments = data ? data[1] : undefined;
  return (
    <Fade in>
      <Flex
        backgroundColor={lightTheme.background[400]}
        borderRadius={8}
        gap={12}
        maxHeight="80vh"
        overflow="hidden"
        padding={2}
      >
        <Flex direction="column" gap={2}>
          <Title>Image Preview</Title>
          <EditorCanvas
            comments={comments}
            isError={isError}
            isLoading={isLoading}
            submission={submission}
          />
        </Flex>
        <Flex direction="column" gap={2}>
          <Title>Image Options</Title>
          <EditorInterface />
        </Flex>
      </Flex>
    </Fade>
  );
};
