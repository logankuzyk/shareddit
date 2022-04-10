import React from "react";
import { Flex, FlexProps } from "@chakra-ui/react";

import { RedditSubmission } from "../../../types/reddit";
import { Image } from "../media/Image";
import { SelfText } from "../media/SelfText";
import { VideoThumbnail } from "../media/VideoThumbnail";

export interface SubmissionContentProps {
  submission: RedditSubmission;
}

export const SubmissionContent: React.FC<SubmissionContentProps> = ({
  submission,
}) => {
  // Content handlers will be activated onPress once they're implemented
  const { linkType } = submission;

  if (linkType === "image") {
    return (
      <Flex marginBottom={4}>
        <Image submission={submission} />
      </Flex>
    );
  } else if (linkType === "self") {
    return (
      <Flex marginBottom={4}>
        <SelfText submission={submission} />
      </Flex>
    );
  } else if (linkType === "video") {
    return (
      <Flex marginBottom={4}>
        <VideoThumbnail submission={submission} />
      </Flex>
    );
  } else {
    return <></>;
  }
};
