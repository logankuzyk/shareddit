import { ColorWeight } from "./colors";

export interface Theme {
  background: {
    [K in ColorWeight]?: string;
  };
  accents: {
    [K in ColorWeight]?: string;
  };
  contrast: {
    [K in ColorWeight]?: string;
  };
  special: {
    highlight: string;
  };
}

export const darkFlairText: string = "#4C566A";
export const lightFlairText: string = "#D8DEE9";

export const lightTheme: Theme = {
  background: {
    "100": "#FFFFFF",
    "200": "#ECEFF4",
    "300": "#E5E9F0",
    "400": "#D8DEE9",
  },
  accents: {
    "100": "#BF616A",
    "200": "#D08770",
    "300": "#EBCB8B",
    "400": "#A3BE8C",
    "500": "#88C0D0",
    "600": "#B48EAD",
  },
  contrast: {
    "100": "#4C566A",
    "200": "#434C5E",
    "300": "#3B4252",
    "400": "#2E3440",
  },
  special: {
    highlight: "#88C0D0",
  },
};