export const parseScore = (score: number) => {
  if (score === 1) {
    return `${score} point`;
  } else {
    return `${score} points`;
  }
};
