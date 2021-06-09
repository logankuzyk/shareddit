import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "./style/theme";
import "./style/fonts.css";

import { Home } from "./views/Home";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Home />
  </ChakraProvider>
);
