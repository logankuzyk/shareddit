import * as htmlToImage from "html-to-image";
import React, { useContext, createContext } from "react";

import { lightTheme, Theme } from "../styles/themes";
import { CommentSort } from "../types/reddit";

export interface EditorContextProps {
  children: React.ReactNode;
}

export interface EditorContextState {
  fontSize: "small" | "medium" | "large";
  imageScale: string;
  imageColumns: number;
  isCensorUsernames: boolean;
  isCensorSubreddits: boolean;
  theme: Theme;
  showComments: boolean;
  topLevelComments: number;
  commentReplies: number;
  replyDepth: number;
  commentSort: CommentSort;
  width: number;
  height: number;
  svgUri: string;
  isLoading: boolean;
}

export interface EditorContextFunctions {
  setProperty: <K extends keyof EditorContextState>(
    key: K,
    value: EditorContextState[K]
  ) => void;
  download: () => void;
}

const initialState: EditorContextState = {
  fontSize: "medium",
  imageScale: "100%",
  imageColumns: 3,
  isCensorUsernames: false,
  isCensorSubreddits: false,
  theme: lightTheme,
  showComments: true,
  topLevelComments: 5,
  commentReplies: 5,
  replyDepth: 3,
  commentSort: "best",
  width: 0,
  height: 0,
  svgUri: "",
  isLoading: false,
};

const initialFunctions: EditorContextFunctions = {
  setProperty: () => undefined,
  download: () => undefined,
};

const EditorDataContext = createContext<EditorContextState>(initialState);
const EditorMutationContext =
  createContext<EditorContextFunctions>(initialFunctions);

export const useEditorData = (): EditorContextState => {
  return useContext(EditorDataContext);
};

export const useEditorMutation = (): EditorContextFunctions => {
  return useContext(EditorMutationContext);
};

export class EditorContextProvider extends React.Component<
  EditorContextProps,
  EditorContextState
> {
  constructor(props: EditorContextProps) {
    super(props);
    this.state = initialState;
  }

  setProperty = <K extends keyof EditorContextState>(
    key: K,
    value: EditorContextState[K]
  ): void => {
    this.setState({ ...this.state, [key]: value });
  };

  downloadImage = (base64: string) => {
    const click = new MouseEvent("click", {
      view: window,
      bubbles: false,
      cancelable: true,
    });
    const a = document.createElement("a");

    a.setAttribute("download", `shareddit.png`);
    a.setAttribute("href", base64);
    a.setAttribute("target", "_blank");
    a.dispatchEvent(click);
    a.remove();
  };

  makeDataURL = async () => {
    const node = document.getElementById("reddit-preview");

    if (!node) {
      alert(
        "There is an issue with the editor. Can't generate or download image."
      );
      return;
    }

    const width = node.clientWidth;
    const height = node.scrollHeight;

    const dataURL = await htmlToImage.toPng(node, {
      backgroundColor: "white",
      pixelRatio: 2,
      width,
      height,
      includeQueryParams: true,
    });

    return dataURL;
  };

  download = async () => {
    this.setState({ isLoading: true });
    const data = await this.makeDataURL();
    if (!data) {
      alert("Something went wrong");
      return;
    }
    this.downloadImage(data);
    this.setState({ isLoading: false });
  };

  render(): JSX.Element {
    return (
      <EditorDataContext.Provider value={this.state}>
        <EditorMutationContext.Provider
          value={{
            setProperty: this.setProperty,
            download: this.download,
          }}
        >
          {this.props.children}
        </EditorMutationContext.Provider>
      </EditorDataContext.Provider>
    );
  }
}
