import { RawSubmission, RedditLinkType } from "../../types/reddit";

export const determineSubmissionType = (
  submission: RawSubmission
): RedditLinkType => {
  const { is_self, is_video, url, is_gallery, crosspost_parent } = submission;
  const imageTypes = /(.jpg|.jpeg|.png)+/;

  if (is_self) {
    return "self";
  } else if (is_video) {
    return "video";
  } else if (url && imageTypes.test(url)) {
    return "image";
  } else if (is_gallery) {
    return "album";
  } else if (crosspost_parent) {
    return "crosspost";
  } else {
    return "external";
  }
};
