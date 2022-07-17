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

  svgToBase64 = () => {
    const imgNode = document.getElementById(
      "shareddit-svg"
    ) as CanvasImageSource;
    const canvasNode = document.getElementById(
      "shareddit-canvas"
    ) as HTMLCanvasElement;
    if (imgNode !== null && canvasNode !== null) {
      const ctx = canvasNode.getContext("2d");
      if (!ctx) return;
      ctx.fillStyle = this.state.theme.background["100"] ?? "white";
      ctx.fillRect(0, 0, this.state.width, this.state.height);
      ctx.drawImage(imgNode, 0, 0);
      const b64 = canvasNode.toDataURL("image/png");
      this.downloadImage(b64);
    } else {
      alert("canvas is null");
    }
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
  };

  makeDataURL = async () => {
    const node = document.getElementById("reddit-preview");

    if (!node) {
      alert(
        "There is an issue with the editor. Can't generate or download image."
      );
      return;
    }

    const height = node.scrollHeight;
    const width = node.clientWidth;
    const dataURL = await htmlToImage.toSvg(node, {
      cacheBust: true,
      canvasWidth: width,
      canvasHeight: height,
      width,
      height,
    });

    return { dataURL, height, width };
  };

  download = async () => {
    const data = await this.makeDataURL();
    if (!data) return;
    this.setState({
      svgUri: data.dataURL,
      width: data.width,
      height: data.height,
    });
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
          <img
            id="shareddit-svg"
            src={this.state.svgUri}
            style={{ display: "none" }}
            onLoad={this.svgToBase64}
          />
          <canvas
            height={this.state.height}
            id="shareddit-canvas"
            style={{
              backgroundColor: this.state.theme.background["100"],
              display: "none",
            }}
            width={this.state.width}
          />
        </EditorMutationContext.Provider>
      </EditorDataContext.Provider>
    );
  }
}
