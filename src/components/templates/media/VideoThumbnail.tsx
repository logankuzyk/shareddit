import React from "react";
import { Image, Flex } from "@chakra-ui/react";
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
      <Flex>
        <Flex position="relative">
          <Image
            source={{ uri: thumbnail }}
            style={{ height: 360, width: "100%" }}
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
