import React, { Component, createContext } from "react";
import { Text } from "@chakra-ui/react";

import { FleshedRedditSubmission, Font } from "../../../types";
import { getParams } from "../../../util/getParams";

interface RedditContextState {
  content: FleshedRedditSubmission;
  status: { message: string; status: "ok" | "error" | "loading" };
  darkMode: boolean;
  downloadAs: "png" | "jpg";
  imageScale: string;
  censorUsernames: boolean;
  censorSubreddit: boolean;
  font: Font;
  commentsOnly: boolean;
  searchingForComment: boolean;
  firstComment?: number;
  lastComment?: number;
  setters: {
    updateImageScale: (percent: number) => void;
    toggleDarkMode: () => void;
    toggleUsernames: () => void;
    toggleSubreddit: () => void;
    updateFont: (font: Font) => void;
    toggleCommentsOnly: () => void;
    updateVisibleComments: () => void;
    onCommentSelect: (index: number) => void;
    refreshContent: () => void;
  };
}

const initialState: RedditContextState = {
  content: {
    author: "",
    score: "",
    date: 0,
    bodyHTML: "",
    awards: [],
    title: "",
    sub: "",
    commentsCount: 0,
    type: "image",
    link: "",
    redact: false,
    thumbnail: null,
  },
  status: { message: "Loading...", status: "loading" },
  downloadAs: "png",
  darkMode: false,
  imageScale: "100%",
  censorUsernames: false,
  censorSubreddit: false,
  font: "Ubuntu",
  commentsOnly: false,
  searchingForComment: false,
  setters: {
    updateImageScale: (percent: number) => {},
    toggleDarkMode: () => {},
    toggleUsernames: () => {},
    toggleSubreddit: () => {},
    updateFont: (font: Font) => {},
    toggleCommentsOnly: () => {},
    updateVisibleComments: () => {},
    onCommentSelect: (index: number) => {},
    refreshContent: () => {},
  },
};

export const RedditContext = createContext<RedditContextState>(initialState);

class RedditContextProvider extends Component {
  state: RedditContextState = { ...initialState };

  componentDidMount() {
    getParams(false).then((urlParams) => {
      if (!(typeof urlParams == "string")) {
        this.setState({ content: urlParams });
        this.setState({
          setters: {
            updateImageScale: (percent: number) => {
              this.setState({ imageScale: `${percent}%` });
            },
            toggleDarkMode: () => {
              const darkModeEnabled = this.state.darkMode;
              this.setState({ darkMode: !darkModeEnabled });
            },
            toggleUsernames: () => {
              const censored = this.state.censorUsernames;
              this.setState({ censorUsernames: !censored });
            },
            toggleSubreddit: () => {
              const censored = this.state.censorSubreddit;
              this.setState({ censorSubreddit: !censored });
            },
            updateFont: (font: Font) => {
              this.setState({ font });
            },
            toggleCommentsOnly: () => {
              const { commentsOnly } = this.state;
              this.setState({
                commentsOnly: !commentsOnly,
                firstComment: undefined,
                lastComment: undefined,
                searchingForComment: false,
              });
            },
            updateVisibleComments: () => {
              this.setState({
                firstComment: undefined,
                lastComment: undefined,
                searchingForComment: true,
              });
            },
            onCommentSelect: (index: number) => {
              if (this.state.firstComment === undefined) {
                this.setState({ firstComment: index });
              } else if (this.state.lastComment === undefined) {
                this.setState({
                  lastComment: index,
                  searchingForComment: false,
                });
              } else {
                this.setState({
                  firstComment: undefined,
                  lastComment: undefined,
                });
                this.state.setters.onCommentSelect(index);
              }
            },
            refreshContent: () => {
              this.setState({
                status: {
                  message: "Loading...",
                  status: "loading",
                },
              });
              getParams(true).then((urlParams) => {
                if (typeof urlParams !== "string") {
                  this.setState({
                    content: urlParams,
                    status: { message: "", status: "ok" },
                  });
                } else {
                  this.setState({
                    status: { message: urlParams, status: "error" },
                  });
                }
              });
            },
          },
        });
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
