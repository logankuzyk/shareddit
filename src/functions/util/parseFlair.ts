import { RawFlair, RedditFlair } from "../../types/reddit";

export const parseFlair = (
  flair: RawFlair | undefined,
  textColor: string,
  backgroundColor: string
): RedditFlair | undefined => {
  return flair && flair.length === 2
    ? {
        img: flair[0].u,
        text: flair[1].t,
        textColor,
        backgroundColor,
      }
    : undefined;
};
