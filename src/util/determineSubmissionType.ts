import { RawSubmission, RedditLinkType } from "../types/reddit";

export const determineSubmissionType = (
  submission: RawSubmission
): RedditLinkType => {
  const { is_self, is_video, url } = submission;
  const imageTypes = /(.jpg|.jpeg|.png)+/;

  if (is_self) {
    return "self";
  } else if (is_video) {
    return "video";
  } else if (url && imageTypes.test(url)) {
    return "image";
  } else {
    return "external";
  }
};
