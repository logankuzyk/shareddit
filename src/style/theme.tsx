import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  useSystemColorMode: false,
  colors: {
    status: {
      success: "#03DD62",
      warning: "#FFDD4A",
      fail: "#F53D00",
    },
    text: {
      dark: "#001219",
      light: "#AAAAAA",
    },
    brand: {
      background: "#E2F3ED",
      highlights: "#0A9396",
      input: "#FFF1EB",
    },
  },
});
