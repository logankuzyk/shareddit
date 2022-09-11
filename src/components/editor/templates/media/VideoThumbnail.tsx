import { Icon, Flex } from "@chakra-ui/react";
import React from "react";

import { RedditSubmission } from "../../../../types/reddit";

interface VideoThumbnailProps {
  submission: RedditSubmission;
}

export const VideoThumbnail: React.FC<VideoThumbnailProps> = ({
  submission,
}) => {
  const { preview } = submission;

  if (!preview) {
    return <></>;
  }

  const { url } = preview.images[0].source;

  return (
    <Flex borderRadius="8px" borderWidth="1px" overflow="hidden">
      <Flex justifyContent="center" position="relative">
        <img
          alt="reddit content"
          src={url}
          style={{ display: "flex", height: "100%", width: "100%" }}
        />
        <Flex
          alignItems="center"
          backgroundColor="rgba(0,0,0,0.1)"
          height="100%"
          justifyContent="center"
          position="absolute"
          width="100%"
        >
          <Icon display="flex" fill="white" height="48px" width="48px">
            <svg viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
              <polygon points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69" />
            </svg>
          </Icon>
        </Flex>
      </Flex>
    </Flex>
  );
};
