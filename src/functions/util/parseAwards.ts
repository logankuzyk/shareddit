import { RawAward, RedditAward } from "../../types/reddit";

export const parseAwards = (awards: RawAward[]): RedditAward[] | undefined => {
  const output = [];
  for (const award of awards) {
    const img = award.resized_static_icons.filter(
      (award) => award.height === 64
    )[0].url;
    output.push({ img, count: award.count });
  }
  return output.length === 0 ? undefined : output;
};
