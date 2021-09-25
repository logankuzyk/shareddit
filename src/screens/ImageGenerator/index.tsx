import React, { useState, useEffect } from "react";

import RedditContextProvider from "./components/RedditContext";
import { Template } from "./components/Template";
import { Editor } from "./components/Editor";
import { SharedditView } from "../shared/components/SharedditView";

export interface SvgAttributes {
  uri: string;
  width: number;
  height: number;
}

export const ImageGenerator: React.FC = () => {
  const [svgData, setSvgData] = useState<SvgAttributes>({
    uri: "",
    width: 0,
    height: 0,
  });

  return (
    <SharedditView>
      <RedditContextProvider>
        <Template svgData={svgData} setSvgData={setSvgData} />
        <Editor setSvgData={setSvgData} />
      </RedditContextProvider>
    </SharedditView>
  );
};
