import { Award } from "./Award";
import { ImageSubmission } from "./ImageSubmission";
import { LinkSubmission } from "./LinkSubmission";
import { TextSubmission } from "./TextSubmission";
import { Comment } from "./Comment";

import { SubmissionType } from "../../../types";

export default function (template: SubmissionType): {
  TitleTemplate: React.FC<any>;
  CommentTemplate: React.FC<any>;
} {
  switch (template) {
    case "image":
      return { TitleTemplate: ImageSubmission, CommentTemplate: Comment };
    case "video":
      return { TitleTemplate: ImageSubmission, CommentTemplate: Comment };
    case "album":
      return { TitleTemplate: ImageSubmission, CommentTemplate: Comment };
    case "text":
      return { TitleTemplate: TextSubmission, CommentTemplate: Comment };
    case "link":
      return { TitleTemplate: LinkSubmission, CommentTemplate: Comment };
  }
}
