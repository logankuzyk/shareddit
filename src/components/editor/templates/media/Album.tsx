import { Grid } from "@chakra-ui/react";
import React from "react";

import { RedditSubmission } from "../../../../types/reddit";

interface AlbumProps {
  submission: RedditSubmission;
}

export const Album: React.FC<AlbumProps> = ({ submission }) => {
  const { media_metadata } = submission;

  if (media_metadata) {
    return (
      <Grid gridGap="8px" gridTemplateColumns="1fr 1fr 1fr">
        {Object.entries(media_metadata).map(([key, img]) => (
          <img
            alt="reddit content"
            key={key}
            src={img.s.u}
            style={{
              height: "100%",
              width: "100%",
              borderWidth: "1px",
              borderRadius: "8px",
            }}
          />
        ))}
      </Grid>
    );
  } else {
    return <></>;
  }
};
