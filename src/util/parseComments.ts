import { parseComment } from "./parseComment";
import { RedditComment, ListedRawComment } from "../types/reddit";

export const parseComments = (
  comments: ListedRawComment[],
  modhash: string
): Array<RedditComment> => {
  const output: Array<RedditComment> = [];
  comments.forEach((item) => {
    if (item.kind === "t1") {
      const comment = parseComment(item.data, modhash);
      output.push(comment);
    } else {
      // Comment was a more children object, out of scope for shareddit.
    }
  });
  return output;
};
