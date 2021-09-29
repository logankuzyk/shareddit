import React, { Component, createContext } from "react";
import { Text } from "@chakra-ui/react";
import ReactGA from "react-ga";

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
              ReactGA.event({
                category: "Image Generation",
                action: "Adjusted Image Scale",
                value: percent,
              });
              this.setState({ imageScale: `${percent}%` });
            },
            toggleDarkMode: () => {
              ReactGA.event({
                category: "Image Generation",
                action: "Toggled Dark Mode",
                value: !this.state.darkMode ? 1 : 0,
              });
              const darkModeEnabled = this.state.darkMode;
              this.setState({ darkMode: !darkModeEnabled });
            },
            toggleUsernames: () => {
              ReactGA.event({
                category: "Image Generation",
                action: "Toggled Username Redaction",
                value: !this.state.censorUsernames ? 1 : 0,
              });
              const censored = this.state.censorUsernames;
              this.setState({ censorUsernames: !censored });
            },
            toggleSubreddit: () => {
              ReactGA.event({
                category: "Image Generation",
                action: "Toggled Subreddit Redaction",
                value: !this.state.censorSubreddit ? 1 : 0,
              });
              const censored = this.state.censorSubreddit;
              this.setState({ censorSubreddit: !censored });
            },
            updateFont: (font: Font) => {
              ReactGA.event({
                category: "Image Generation",
                action: `Set Font to ${font}`,
              });
              this.setState({ font });
            },
            toggleCommentsOnly: () => {
              ReactGA.event({
                category: "Image Generation",
                action: "Toggled Comments Only",
                value: !this.state.commentsOnly ? 1 : 0,
              });
              const { commentsOnly } = this.state;
              this.setState({
                commentsOnly: !commentsOnly,
                firstComment: undefined,
                lastComment: undefined,
                searchingForComment: false,
              });
            },
            updateVisibleComments: () => {
              ReactGA.event({
                category: "Image Generation",
                action: "Started Comment Selection",
              });
              this.setState({
                firstComment: undefined,
                lastComment: undefined,
                searchingForComment: true,
              });
            },
            onCommentSelect: (index: number) => {
              if (this.state.firstComment === undefined) {
                ReactGA.event({
                  category: "Image Generation",
                  action: "Selected First Comment to Display",
                  value: index,
                });
                this.setState({ firstComment: index });
              } else if (this.state.lastComment === undefined) {
                ReactGA.event({
                  category: "Image Generation",
                  action: "Selected Last Comment to Display",
                  value: index,
                });
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
      } else {
        ReactGA.exception({
          describe: "Backend Data Retrieval Failed",
        });
        this.setState({ status: { message: urlParams, status: "error" } });
      }
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
