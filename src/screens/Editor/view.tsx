import { Fade, Grid } from "@chakra-ui/react";
import React, { useRef } from "react";

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
}

export const EditorScreenView: React.FC<EditorScreenViewProps> = ({
  data,
  isLoading,
  isError,
}) => {
  const submission = data ? data[0] : undefined;
  const comments = data ? data[1] : undefined;
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <Fade in>
      <Grid
        gridAutoFlow="column"
        gridColumnGap="12px"
        gridTemplateColumns="1fr 1fr"
        gridTemplateRows="32px 1fr"
        maxHeight="85vh"
      >
        <Title>Image Preview</Title>
        <EditorCanvas
          comments={comments}
          isError={isError}
          isLoading={isLoading}
          overflowY="scroll"
          scrollRef={scrollRef}
          submission={submission}
        />
        <Title>Image Options</Title>
        <EditorInterface />
      </Grid>
    </Fade>
  );
};
