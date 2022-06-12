import { Flex, Fade, Grid } from "@chakra-ui/react";
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
      <Grid
        borderColor={lightTheme.background[400]}
        borderRadius={8}
        borderWidth={1}
        boxShadow="xl"
        gap={12}
        marginX={80}
        overflow="hidden"
        padding={2}
        templateColumns="3fr 1fr"
      >
        <Flex direction="column" gap={2} gridColumn={1}>
          <Title>Image Preview</Title>
          <EditorCanvas
            comments={comments}
            isError={isError}
            isLoading={isLoading}
            submission={submission}
          />
        </Flex>
        <Flex direction="column" gap={2} gridColumn={2}>
          <Title>Image Options</Title>
          <EditorInterface />
        </Flex>
      </Grid>
    </Fade>
  );
};
