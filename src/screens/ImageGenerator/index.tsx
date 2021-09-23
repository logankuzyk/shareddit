import React from "react";

import RedditContextProvider from "./components/RedditContext";
import { Template } from "./components/Template";
import { Editor } from "./components/Editor";
import { SharedditView } from "../shared/components/SharedditView";

export const ImageGenerator: React.FC = () => {
  return (
    <SharedditView>
      <RedditContextProvider>
        <Template />
        <Editor />
      </RedditContextProvider>
    </SharedditView>
  );
};
