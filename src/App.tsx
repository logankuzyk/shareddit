import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import ReactGA from "react-ga";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/fonts.css";

import { EditorScreenProvider } from "./screens/Editor";
import { HomeScreenProvider } from "./screens/Home";
import { NotFound } from "./screens/NotFound";
import { RedirectRedditPath } from "./screens/RedirectRedditPath";
import { theme } from "./styles/theme";
import { SharedditView } from "./views/SharedditView";

export const App = (): JSX.Element => {
  ReactGA.initialize("UA-51247116-3");
  ReactGA.pageview(window.location.pathname + window.location.search);

  const client = new QueryClient();

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={client}>
        <Router>
          <Switch>
            <Route path="/">
              <SharedditView>
                <HomeScreenProvider />
              </SharedditView>
            </Route>
            <Route path="/generate">
              <SharedditView>
                <EditorScreenProvider />
              </SharedditView>
            </Route>
            <Route path="/r">
              <RedirectRedditPath />
            </Route>
            <Route>
              <SharedditView>
                <NotFound />
              </SharedditView>
            </Route>
          </Switch>
        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  );
};
