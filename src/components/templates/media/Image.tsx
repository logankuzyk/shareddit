import React from "react";
import { Image as ChakraImage } from "@chakra-ui/react";

import { RedditSubmission } from "../../../types/reddit";

interface ImageProps {
  submission: RedditSubmission;
}

export const Image: React.FC<ImageProps> = ({ submission }) => {
  const { url } = submission;

  if (url) {
    return (
      <ChakraImage
        source={{ uri: url }}
        style={{ height: 360, width: "100%" }}
      />
    );
  } else {
    return <></>;
  }
};
