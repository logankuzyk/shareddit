import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";

import { theme } from "./style/theme";
import "./style/fonts.css";

import { Home } from "./screens/Home";
import { ImageGenerator } from "./screens/ImageGenerator";
import { NotFound } from "./screens/NotFound";

export const App = () => {
  ReactGA.initialize("UA-51247116-3");
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/generate">
            <ImageGenerator />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
};
