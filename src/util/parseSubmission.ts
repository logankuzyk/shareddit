import { RawSubmission, RedditSubmission } from "../types/reddit";
import { determineSubmissionType } from "./determineSubmissionType";
import { parseDate } from "./parseDate";
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
    modhash,
    date: parseDate(submission.created),
  };
};
