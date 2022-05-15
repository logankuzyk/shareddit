import { RawSubmission, RedditSubmission } from "../../types/reddit";
import { determineSubmissionType } from "./determineSubmissionType";
import { parseDate } from "./parseDate";
import { parseFlair } from "./parseFlair";
import { parseScore } from "./parseScore";

export const parseSubmission = (
  submission: RawSubmission,
  modhash: string
): RedditSubmission => {
  return {
    ...submission,
    type: "submission",
    linkType: determineSubmissionType(submission),
    scoreString: parseScore(submission.score),
    flair:
      submission.link_flair_richtext &&
      submission.link_flair_text_color &&
      submission.link_flair_background_color
        ? parseFlair(
            submission.link_flair_richtext,
            submission.link_flair_text_color,
            submission.link_flair_background_color
          )
        : undefined,
    userFlair: parseFlair(
      submission.author_flair_richtext,
      submission.author_flair_text_color,
      submission.author_flair_background_color
    ),
    modhash,
    date: parseDate(submission.created),
  };
};
