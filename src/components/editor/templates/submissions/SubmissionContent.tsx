import React from "react";

import { RedditSubmission } from "../../../../types/reddit";
import { Album } from "../media/Album";
import { Image } from "../media/Image";
import { LinkPreview } from "../media/LinkPreview";
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
    <>
      {linkType === "image" && <Image submission={submission} />}
      {linkType === "self" && <SelfText submission={submission} />}
      {linkType === "video" && <VideoThumbnail submission={submission} />}
      {linkType === "album" && <Album submission={submission} />}
      {linkType === "external" && <LinkPreview submission={submission} />}
    </>
  );
};
