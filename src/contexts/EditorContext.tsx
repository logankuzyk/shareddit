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
      ctx?.drawImage(imgNode, 0, 0);
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

    document.removeChild(a);
  };

  copyImage = async (base64: string) => {
    const blob = await fetch(base64).then((res) => res.blob());
    const type = "image/png";
    const data = [new ClipboardItem({ [type]: blob })];

    const input = document.getElementById("image-base64");

    if (input) {
      input.setAttribute("value", base64);
      const dest = document.getElementById("headless-interface");
      if (dest) {
        const a = document.createElement("a");
        a.setAttribute("id", "loaded");
        dest.appendChild(a);
      }
    }

    navigator.clipboard.write(data);
  };

  makeDataURL = async () => {
    const node = document.getElementById("reddit-preview");

    if (!node) {
      alert(
        "There is an issue with the editor. Can't generate or download image."
      );
      return;
    }

    const rawDataURL = await htmlToImage.toSvg(node, { cacheBust: true });
    const match = rawDataURL.match(
      /svg%22%20width%3D%22(?<width>[0-9]*)%22%20height%3D%22(?<height>[0-9]*)%22/
    );
    if (match && match.groups) {
      const height = node.clientHeight;
      const width = node.clientWidth;

      const dataURL = rawDataURL.replace(
        /svg%22%20width%3D%22[0-9]*%22%20height%3D%22[0-9]*%22/,
        `svg%22%20width%3D%22${width}%22%20height%3D%22${height}%22`
      );

      return { dataURL, height, width };
    }
  };

  download = async () => {
    const data = await this.makeDataURL();
    if (!data) return;
    this.setState({
      svgUri: data.dataURL,
      width: 960,
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
          <input id="image-base64" style={{ display: "none" }} />
          <img
            id="shareddit-svg"
            src={this.state.svgUri}
            style={{ display: "none" }}
            onLoad={this.svgToBase64}
          />
          <canvas
            height={this.state.height}
            id="shareddit-canvas"
            style={{ display: "none" }}
            width={this.state.width}
          />
        </EditorMutationContext.Provider>
      </EditorDataContext.Provider>
    );
  }
}
