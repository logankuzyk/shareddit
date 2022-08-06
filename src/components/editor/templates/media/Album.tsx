import { Grid } from "@chakra-ui/react";
import React from "react";

import { useEditorData } from "../../../../contexts/EditorContext";
import { RedditSubmission } from "../../../../types/reddit";
import { Image } from "./Image";

interface AlbumProps {
  submission: RedditSubmission;
}

export const Album: React.FC<AlbumProps> = ({ submission }) => {
  const { media_metadata } = submission;
  const { imageColumns } = useEditorData();

  if (media_metadata) {
    return (
      <Grid gridGap="8px" gridTemplateColumns={`repeat(${imageColumns}, 1fr)`}>
        {Object.entries(media_metadata).map(([key, img]) => (
          <Image key={key} src={img.s.u} />
        ))}
      </Grid>
    );
  } else {
    return <></>;
  }
};
