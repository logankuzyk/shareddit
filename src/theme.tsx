import { extendTheme } from "@chakra-ui/react";

const colors = {
  text: {
    dark: "#001219",
    light: "#AAAAAA",
  },
  background: "#E2F3ED",
  highlights: "#0A9396",
  input: "#FFF1EB",
  status: {
    success: "#03DD62",
    warning: "#FFDD4A",
    fail: "#F53D00",
  },
};

const theme = extendTheme({ colors });

export default theme;
