import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { theme } from "./style/theme";
import "./style/fonts.css";

import { Home } from "./views/Home";
import { Editor } from "./views/Editor";
import { NotFound } from "./views/NotFound";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/generate">
          <Editor />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </ChakraProvider>
);
