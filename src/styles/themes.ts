import { colors, ColorWeight } from "./colors";

export interface Theme {
  main: {
    [K in ColorWeight]?: string;
  };
  accents: {
    [K in ColorWeight]?: string;
  };
}

export const light: Theme = {
  main: {
    "100": colors.grey["100"],
    "300": colors.grey["300"],
    "500": colors.grey["500"],
  },
  accents: {},
};
