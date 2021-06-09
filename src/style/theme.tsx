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
      focus: "#087172",
      input: "#FFF1EB",
    },
    button: {
      500: "#0A9396",
      600: "#087172",
    },
  },
  styles: {
    global: {
      body: {
        backgroundColor: "brand.background",
        color: "text.dark",
        fontFamily: "Jost",
      },
      input: {
        backgroundColor: "brand.input",
        alignText: "center",
      },
    },
  },
});
