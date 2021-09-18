import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { theme } from "./style/theme";
import "./style/fonts.css";

import { Home } from "./screens/Home/Home";
import { ImageGenerator } from "./screens/ImageGenerator/ImageGenerator";
import { DownloadImage } from "./screens/ImageDownloader/DownloadImage";
import { NotFound } from "./screens/NotFound";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/generate">
          <ImageGenerator />
        </Route>
        <Route path="/download">
          <DownloadImage />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </ChakraProvider>
);
