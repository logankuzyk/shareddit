import { RedditComment, RawComment } from "../../types/reddit";
import { parseComments } from "./parseComments";
import { parseDate } from "./parseDate";
import { parseFlair } from "./parseFlair";
import { parseScore } from "./parseScore";

export const parseComment = (
  comment: RawComment,
  modhash: string
): RedditComment => {
  const replies = comment.replies
    ? parseComments(comment.replies.data.children, modhash)
    : [];
  return {
    ...comment,
    type: "comment",
    date: parseDate(comment.created),
    scoreString: parseScore(comment.score),
    flair: parseFlair(
      comment.author_flair_richtext,
      comment.author_flair_text_color,
      comment.author_flair_background_color
    ),
    modhash,
    replyTree: replies,
  };
};
