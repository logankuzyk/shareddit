import React from "react";

import { RedditSubmission } from "../../../../types/reddit";
import { Title } from "../../../typography";
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
  switch (submission.linkType) {
    case "image":
      return <Image src={submission.url ?? ""} />;
    case "self":
      return <SelfText submission={submission} />;
    case "video":
      return <VideoThumbnail submission={submission} />;
    case "album":
      return <Album submission={submission} />;
    case "external":
      return <LinkPreview submission={submission} />;
    default:
      return (
        <Title>This reddit submission type has not been implemented!</Title>
      );
  }
};
