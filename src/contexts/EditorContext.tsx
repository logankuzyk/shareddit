import React, { useContext, createContext } from "react";

export interface EditorContext {
  fontSize: "small" | "medium" | "large";
  imageScale: string;
  censorUsernames: boolean;
  censorSubreddit: boolean;
  theme: "light" | "dark";
  showComments: boolean;
}

const initialState: EditorContext = {
  fontSize: "medium",
  imageScale: "100%",
  censorUsernames: false,
  censorSubreddit: false,
  theme: "light",
  showComments: true,
};

const EditorContext = createContext<EditorContext>(initialState);

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
