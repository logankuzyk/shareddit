import { Comment } from "./Comment";
import { ImageSubmission } from "./ImageSubmission";
import { TextSubmission } from "./TextSubmission";

import { SubmissionType } from "../../types";

export default function templates(template: SubmissionType): {
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
      return { TitleTemplate: ImageSubmission, CommentTemplate: Comment };
  }
}
