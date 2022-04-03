import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";

import { theme } from "./styles/theme";
import "./styles/fonts.css";

import { HomeScreenProvider } from "./screens/Home";
import { EditorScreenProvider } from "./screens/Editor";
import { NotFound } from "./screens/NotFound";
import { RedirectRedditPath } from "./screens/RedirectRedditPath";

export const App = () => {
  ReactGA.initialize("UA-51247116-3");
  ReactGA.pageview(window.location.pathname + window.location.search);

  const client = new QueryClient();

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={client}>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomeScreenProvider />
            </Route>
            <Route path="/generate">
              <EditorScreenProvider />
            </Route>
            <Route path="/r">
              <RedirectRedditPath />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  );
};
