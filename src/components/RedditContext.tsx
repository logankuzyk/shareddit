import React, { Component, createContext } from "react";
import { Text } from "@chakra-ui/react";

import { FleshedRedditSubmission, ImageTheme } from "../types";
import { getParams } from "../util/getParams";

interface RedditContextState {
  content: FleshedRedditSubmission;
  status: { message: string; status: "ok" | "error" | "loading" };
  theme: ImageTheme;
  downloadAs: "png" | "jpg";
}

const initialState: RedditContextState = {
  content: {
    author: "",
    score: "",
    prettyDate: "",
    bodyHTML: "",
    awards: [],
    title: "",
    sub: "",
    comments: [],
    commentsCount: 0,
    type: "image",
    link: "",
    redact: false,
    color: null,
  },
  status: { message: "Loading...", status: "loading" },
  theme: "old",
  downloadAs: "png",
};

export const RedditContext = createContext<RedditContextState>(initialState);

class RedditContextProvider extends Component {
  state: RedditContextState = { ...initialState };

  componentDidMount() {
    getParams().then((urlParams) => {
      if (!(typeof urlParams == "string")) {
        this.setState({ content: urlParams });
        this.setState({ status: { message: "", status: "ok" } });
      } else this.setState({ status: { message: urlParams, status: "error" } });
    });
  }

  render() {
    return (
      <RedditContext.Provider value={{ ...this.state }}>
        {this.state.status.status === "ok" ? (
          this.props.children
        ) : (
          <Text>{this.state.status.message}.</Text>
        )}
      </RedditContext.Provider>
    );
  }
}

export default RedditContextProvider;
