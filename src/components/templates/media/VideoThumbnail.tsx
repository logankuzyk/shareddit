import React from "react";
import { Flex } from "@chakra-ui/react";
// import { FontAwesome5 } from "@expo/vector-icons";

import { RedditSubmission } from "../../../types/reddit";

interface VideoThumbnailProps {
  submission: RedditSubmission;
}

export const VideoThumbnail: React.FC<VideoThumbnailProps> = ({
  submission,
}) => {
  const { thumbnail } = submission;

  if (thumbnail) {
    return (
      <Flex borderWidth={1} borderRadius={8} overflow="hidden">
        <Flex position="relative">
          <img
            alt="reddit content"
            src={thumbnail}
            style={{
              height: "100%",
              width: "100%",
              borderWidth: 1,
              borderRadius: 8,
            }}
          />
          <Flex
            width="100%"
            height="100%"
            backgroundColor="rgba(0,0,0,0.2)"
            position="absolute"
            justifyContent="center"
            alignItems="center"
          >
            {/* Pretend play button? */}
            {/* <FontAwesome5 color="white" size={32} name="play" /> */}
          </Flex>
        </Flex>
      </Flex>
    );
  } else {
    return <></>;
  }
};
