import React, { useContext, createContext } from "react";

import { light, Theme } from "../styles/themes";

export interface EditorContextValue {
  fontSize: "small" | "medium" | "large";
  imageScale: string;
  isCensorUsernames: boolean;
  isCensorSubreddits: boolean;
  theme: Theme;
  showComments: boolean;
}

const initialState: EditorContextValue = {
  fontSize: "medium",
  imageScale: "100%",
  isCensorUsernames: false,
  isCensorSubreddits: false,
  theme: light,
  showComments: true,
};

const EditorContext = createContext<EditorContextValue>(initialState);

export const useEditorContext = () => {
  return useContext(EditorContext);
};

export const EditorContextProvider: React.FC = ({ children }) => {
  return (
    <EditorContext.Provider value={initialState}>
      {children}
    </EditorContext.Provider>
  );
};
