import React from "react";
import { Flex } from "@chakra-ui/react";

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

  return (
    <Flex>
      {linkType === "image" && <Image submission={submission} />}
      {linkType === "self" && <SelfText submission={submission} />}
      {linkType === "video" && <VideoThumbnail submission={submission} />}
      {linkType === "external" && <></>}
    </Flex>
  );
};
