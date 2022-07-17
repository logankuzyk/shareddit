import { RawAward } from "../../types/reddit";

export const parseAwards = (awards: RawAward[]): number => {
  return awards.reduce<number>((a, b) => a + b.count, 0);
};
