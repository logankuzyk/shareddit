import React, { useState } from "react";

import RedditContextProvider from "./components/RedditContext";
import { Template } from "./components/Template";
import { Editor } from "./components/Editor";
import { SharedditView } from "../shared/components/SharedditView";
export interface SvgAttributes {
  uri: string;
  width: number;
  height: number;
  mode: "download" | "copy";
}

export const ImageGenerator: React.FC = () => {
  const [svgData, setSvgData] = useState<SvgAttributes>({
    uri: "",
    width: 0,
    height: 0,
    mode: "download",
  });

  return (
    <SharedditView>
      <RedditContextProvider>
        <div id="headless-interface">
          <input id="image-base64" style={{ display: "none" }} />
        </div>
        <Template svgData={svgData} setSvgData={setSvgData} />
        <Editor svgData={svgData} setSvgData={setSvgData} />
      </RedditContextProvider>
    </SharedditView>
  );
};
