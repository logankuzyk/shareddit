import React from "react";
import { Flex, FlexProps } from "@chakra-ui/react";

import { RedditSubmission } from "../../../types/reddit";
import { Image } from "../media/Image";
import { SelfText } from "../media/SelfText";
import { VideoThumbnail } from "../media/VideoThumbnail";

export interface SubmissionContentProps extends FlexProps {
  submission: RedditSubmission;
}

export const SubmissionContent: React.FC<SubmissionContentProps> = ({
  submission,
  ...props
}) => {
  // Content handlers will be activated onPress once they're implemented
  const { linkType } = submission;

  if (linkType === "image") {
    return (
      <Flex {...props}>
        <Image submission={submission} />
      </Flex>
    );
  } else if (linkType === "self") {
    return (
      <Flex {...props}>
        <SelfText submission={submission} />
      </Flex>
    );
  } else if (linkType === "video") {
    return (
      <Flex {...props}>
        <VideoThumbnail submission={submission} />
      </Flex>
    );
  } else {
    return <></>;
  }
};
