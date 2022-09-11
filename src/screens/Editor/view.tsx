import { Fade, Grid } from "@chakra-ui/react";
import React from "react";

import { EditorCanvas } from "../../components/editor/EditorCanvas";
import { EditorInterface } from "../../components/editor/EditorInterface";
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
        alignItems="center"
        gridGap="12px"
        gridTemplateColumns="repeat(auto-fit, minmax(max(200px, 500px), 1fr))"
        maxHeight="calc(100vh - 96px)"
        maxWidth="100vw"
      >
        <EditorInterface />
        <EditorCanvas
          comments={comments}
          isError={isError}
          isLoading={isLoading}
          maxHeight="calc(100vh - 96px - 32px)"
          submission={submission}
        />
      </Grid>
    </Fade>
  );
};
