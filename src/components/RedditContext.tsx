import React, { Component, createContext } from "react";
import { Text } from "@chakra-ui/react";

import { FleshedRedditSubmission, ImageTheme } from "../types";
import { getParams } from "../util/getParams";

interface RedditContextState {
  content: FleshedRedditSubmission;
  error: { message: string };
  theme: ImageTheme;
  downloadAs: "png" | "jpg";
}

export const RedditContext = createContext<null | RedditContextState>(null);

class RedditContextProvider extends Component {
  state: RedditContextState = {
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
    },
    error: { message: "" },
    theme: "old",
    downloadAs: "png",
  };

  componentDidMount() {
    getParams().then((urlParams) => {
      if (!(typeof urlParams == "string"))
        this.setState({ content: urlParams });
      else this.setState({ message: urlParams });
    });
  }

  render() {
    return (
      <RedditContext.Provider value={{ ...this.state }}>
        {this.state.content !== null ? (
          this.props.children
        ) : (
          <Text>Loading...</Text>
        )}
      </RedditContext.Provider>
    );
  }
}

export default RedditContextProvider;
