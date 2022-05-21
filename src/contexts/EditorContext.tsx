import React, { useContext, createContext } from "react";

import { lightTheme, Theme } from "../styles/themes";

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
}

export interface EditorContextFunctions {
  setProperty: <K extends keyof EditorContextState>(
    key: K,
    value: EditorContextState[K]
  ) => void;
}

const initialState: EditorContextState = {
  fontSize: "medium",
  imageScale: "100%",
  isCensorUsernames: false,
  isCensorSubreddits: false,
  theme: lightTheme,
  showComments: true,
};

const initialFunctions: EditorContextFunctions = {
  setProperty: () => {},
};

const EditorDataContext = createContext<EditorContextState>(initialState);
const EditorMutationContext =
  createContext<EditorContextFunctions>(initialFunctions);

export const useEditorData = () => {
  return useContext(EditorDataContext);
};

export const useEditorMutation = () => {
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
  ) => {
    this.setState({ ...this.state, [key]: value });
  };

  render() {
    return (
      <EditorDataContext.Provider value={this.state}>
        <EditorMutationContext.Provider
          value={{ setProperty: this.setProperty }}
        >
          {this.props.children}
        </EditorMutationContext.Provider>
      </EditorDataContext.Provider>
    );
  }
}
